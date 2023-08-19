const express = require('express')

const routerIrrigation = express.Router()

var pool = require('../../mysql-connector');

routerIrrigation.get('/', function (req, res) {
    pool.query('Select * from Log_Riegos', function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerIrrigation.get('/:id', function (req, res) {
    const electrovalveId = req.params.id;

    pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId = ?', [electrovalveId], function (err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(200).send(result);
    });
});

routerIrrigation.get('/:id/currentValue', function (req, res) {
    const electrovalveId = req.params.id;
    pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId = ? ORDER BY fecha DESC LIMIT 1', [electrovalveId], function (err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }

        if (result.length === 0) {
            res.status(404).send('No values found for electrovalve: ' + electrovalveId);
            return;
        }

        const currentValue = result[0].apertura;
        res.status(200).json({ currentValue });
    });
});

routerIrrigation.post('/register', (req, res) => {
    const { opened, date, electrovalveId } = req.body;
    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    const newRegister = {
        apertura: opened,
        fecha: formattedDate,
        electrovalvulaId: electrovalveId
    };

    pool.query('INSERT INTO Log_Riegos SET ?', newRegister, (err, result) => {
        if (err) {
            const msg = "Error while inserting irrigation register";
            console.error(msg, err);
            res.status(500).json({ error: msg });
            return;
        }
        const msg = "Irrigation register inserted successfully";
        console.log(msg);
        res.status(200).json({ msg });
    });
});


module.exports = routerIrrigation