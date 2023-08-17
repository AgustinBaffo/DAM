const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerDispositivo.get('/:id/mediciones', function(req, res) {
    const dispositivoId = req.params.id;

    pool.query('SELECT * FROM Mediciones WHERE dispositivoId = ?', [dispositivoId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(200).send(result);
    });
});

routerDispositivo.get('/:id/currentValue', function(req, res) {
    
    const dispositivoId = req.params.id;

    pool.query('SELECT valor FROM Mediciones WHERE dispositivoId = ? ORDER BY fecha DESC LIMIT 1', [dispositivoId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        
        if (result.length === 0) {
            res.status(404).send('No se encontraron mediciones para el dispositivo.');
            return;
        }
        
        const currentValue = result[0].valor;
        res.status(200).json({ currentValue });
    });
});

module.exports = routerDispositivo