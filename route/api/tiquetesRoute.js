const express = require('express')
const tiquetesModel = require('../../models/tiquetesModel')
const app = express()


app.get('/', (req, res) => {
    tiquetesModel.find({}).exec((err, tiquetes) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al consultar tiquetes',
                errors: err
            })
        }
        return res.status(200).json({
            ok: true,
            tiquetes
        })
    })
})

app.post('/', (req, res) => {
    let body = req.body
    let tiquete = new tiquetesModel({
        vuelo: body.vuelo,
        nombre_pasajero: body.nombre_pasajero,
        clase: body.clase,
        origen: body.origen,
        destino: body.destino,
        fecha_vuelo: body.fecha_vuelo,
        gate: body.gate,
        asiento: body.gate
    })
    tiquete.save((err, tiqueteGuardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear tiquete',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            tiquete: tiqueteGuardado
        })
    })
})

app.delete('/:id', (req, res) => {
    let id = req.params.id;
    tiquetesModel.findByIdAndRemove(id, (err, destino) => {
        // check if query error
        if (err) {
            console.log(err);
            return res.json({ success: false });
        }
        res.redirect('/' + id);
    })
})

module.exports = app