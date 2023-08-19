//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;

const cors = require('cors');

var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const routerDispositivo = require('./routes/dispositivo')
const routerIrrigation = require('./routes/irrigation')

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
app.use('/irrigation', routerIrrigation)

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

app.get('/dispositivosEstados/', function (req, res, next) {
    /// @todo: Deberia usar MAX(fecha) pero como hay fechas repetidas devuelve sensores repetidos
    const query = `
        SELECT d.dispositivoId, d.nombre, d.ubicacion, m.valor, m.fecha
        FROM Dispositivos d
        LEFT JOIN (
            SELECT Mediciones.dispositivoId, Mediciones.valor, Mediciones.fecha
            FROM Mediciones
            INNER JOIN (
                SELECT dispositivoId, MAX(medicionId) AS max_medicionId
                FROM Mediciones
                GROUP BY dispositivoId
            ) max_m ON Mediciones.dispositivoId = max_m.dispositivoId AND Mediciones.medicionId = max_m.max_medicionId
        ) m ON d.dispositivoId = m.dispositivoId
    `;

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
