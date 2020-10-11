const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinoSchema = new Schema({
    vuelo: { type: String, required: [true, 'El codigo del vuelo es necesario'] },
    clase: { type: String, required: [true, 'La clase del vuelo es necesario'] },
    origen: { type: String, required: [true, 'El lugar de origen es necesario'] },
    destino: { type: String, required: [true, 'El lugar de destino es necesario'] },
    fecha_vuelo: { type: Date, required: [true, 'La fecha del vuelo es necesario'] },
    valor: { type: Number, required: [true, 'El valor es requerido'] }
}, { collection: 'destinos' });

module.exports = mongoose.model('destinos', destinoSchema);