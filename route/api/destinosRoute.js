const express = require('express')
const destinosModel = require('../../models/destinosModel')
const app = express()


app.get('/', (req, res) => {
    destinosModel.find({}).exec((err, destinos) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al consultar destinos',
                errors: err
            })
        }
        return res.status(200).json({
            ok: true,
            destinos
        })
    })
})

app.post('/', (req, res) => {
    let body = req.body
    let destino = new destinosModel({
        vuelo: body.vuelo,
        clase: body.clase,
        origen: body.origen,
        destino: body.destino,
        fecha_vuelo: body.fecha_vuelo,
        valor: body.valor
    })
    destino.save((err, destinoGuardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear destino',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            destino: destinoGuardado
        })
    })
})

app.put('/', (req, res) => {
    let id = req.params.id
    destinosModel.findByIdAndUpdate({ id }, {
        vuelo: body.vuelo,
        clase: body.clase,
        origen: body.origen,
        destino: body.destino,
        fecha_vuelo: body.fecha_vuelo,
        valor: body.valor
    }, function (err, docs) {
        if (err) res.json(err);
        else {
            console.log(docs);
            res.redirect('/' + id);
        }
    })

})

app.delete('/', (req, res) => {
    let id = req.params.id;
    destinosModel.findByIdAndRemove(id, (err, destino) => {
        // check if query error
        if (err) {
            console.log(err);
            return res.json({ success: false });
        }
        res.redirect('/' + id);
    })
})

module.exports = app