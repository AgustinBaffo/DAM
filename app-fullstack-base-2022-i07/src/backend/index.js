//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const myLogger = function (req, res, next) {
    console.log('Logged')
    next()
}

const authenticator = function (req, res, next) {
    // si el usuario tiene permiso
    next()
    // si el usuario no tiene permiso
    res.send('No tenes permiso para acceder al recurso').status(401)
}

app.use(myLogger)
// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));
// to enable cors
app.use(cors(corsOptions));

app.use('/dispositivo', routerDispositivo)

//=======[ Main module code ]==================================================

app.get('/', function (req, res, next) {
    res.send({ 'mensaje': 'Hola DAM' }).status(200);
});

app.get('/user/', function (req, res, next) {
    pool.query('Select * from Usuarios', function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

app.listen(PORT, function (req, res) {
    console.log("NodeJS API running correctly");
});

app.get('/dispositivos/', function (req, res, next) {
    const query = `
        SELECT d.dispositivoId, d.nombre, d.ubicacion, m.valor, m.fecha
        FROM Dispositivos d
        LEFT JOIN Mediciones m ON d.dispositivoId = m.dispositivoId
        WHERE m.fecha = (
            SELECT MAX(fecha)
            FROM Mediciones
            WHERE dispositivoId = d.dispositivoId
        )
    `;
    // const query = `
    // SELECT
    //     d.dispositivoId,
    //     MAX(m.fecha) AS fecha,
    //     MAX(m.valor) AS medicion
    // FROM
    //     Dispositivos d
    // JOIN
    //     Mediciones m ON d.dispositivoId = m.dispositivoId
    // GROUP BY
    //     d.dispositivoId;

    // `;
    // const query = `
    // SELECT m1.*
    // FROM Mediciones m1
    // JOIN (
    //     SELECT dispositivoId, MAX(fecha) AS max_fecha
    //     FROM Mediciones
    //     GROUP BY dispositivoId
    // ) m2 ON m1.dispositivoId = m2.dispositivoId AND m1.fecha = m2.max_fecha;
    // `;


    pool.query(query, function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }

        const dispositivos = result.map(row => ({
            dispositivoId: row.dispositivoId,
            nombre: row.nombre,
            ubicacion: row.ubicacion,
            valor: row.valor,
            fecha: row.fecha
        }));

        res.send(dispositivos).status(200);
    });
});


//=======[ End of file ]=======================================================
