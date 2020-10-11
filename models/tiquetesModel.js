const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tiqueteSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    valor: { type: Number, required: [true, 'El valor es requerido']}
}, {collection:'tiquetes'});

module.exports = mongoose.model('tiquetes', tiqueteSchema);