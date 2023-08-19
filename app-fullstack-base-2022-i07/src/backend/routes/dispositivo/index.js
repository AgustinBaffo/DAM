const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function (req, res) {
    pool.query('Select * from Dispositivos', function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerDispositivo.get('/:id/mediciones', function (req, res) {
    const dispositivoId = req.params.id;

    pool.query('SELECT * FROM Mediciones WHERE dispositivoId = ?', [dispositivoId], function (err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(200).send(result);
    });
});

routerDispositivo.get('/:id/currentValue', function (req, res) {

    const deviceId = req.params.id;

    pool.query('SELECT valor FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC LIMIT 1', [deviceId], function (err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }

        if (result.length === 0) {
            res.status(404).send('No measurements found for device: ' + deviceId);
            return;
        }

        const currentValue = result[0].valor;
        res.status(200).json({ currentValue });
    });
});


routerDispositivo.get('/:id/electrovalveId', function (req, res) {

    const deviceId = req.params.id;

    pool.query('SELECT electrovalvulaId FROM Dispositivos WHERE dispositivoId = ?', [deviceId], function (err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }

        if (result.length === 0) {
            res.status(404).send('No electrovalve found for device: ' + deviceId);
            return;
        }

        const electrovalveId = result[0].electrovalvulaId;
        res.status(200).json({ electrovalveId });
    });
});

routerDispositivo.get('/devicesId', function (req, res) {
    pool.query('SELECT DISTINCT dispositivoId FROM Dispositivos', function (err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }

        const deviceIds = result.map(row => row.dispositivoId);
        res.status(200).send(deviceIds);
    });
});


routerDispositivo.post('/mediciones', (req, res) => {
    
    const { deviceId, val, date } = req.body;
    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    const newMed = {
        valor: val,
        fecha: formattedDate,
        dispositivoId: deviceId
    };

    pool.query('INSERT INTO Mediciones SET ?', newMed, (err, result) => {
        if (err) {
            const msg = "Error while inserting new measurement register";
            console.error(msg, err);
            res.status(500).json({ error: msg });
            return;
        }
        const msg = "Measurement register inserted successfully";
        console.log(msg);
        res.status(200).json({ msg });
    });
});



module.exports = routerDispositivo