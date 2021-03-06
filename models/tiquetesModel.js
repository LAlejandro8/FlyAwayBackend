const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tiqueteSchema = new Schema({
    vuelo: { type: String, required: [true, 'El codigo del vuelo es necesario'] },
    nombre_pasajero: { type: String, required: [true, 'El nombre del pasajero es necesario'] },
    clase: { type: String, required: [true, 'La clase del vuelo es necesario'] },
    origen: { type: String, required: [true, 'El lugar de origen es necesario'] },
    destino: { type: String, required: [true, 'El lugar de destino es necesario'] },
    fecha_vuelo: { type: Date, required: [true, 'La fecha del vuelo es necesario'] },
    gate: { type: String, required: [true, 'La puerta de salida es necesaria'] },
    asiento: { type: String, required: [true, 'El asiento es necesario'] }
}, { collection: 'tiquetes' });

module.exports = mongoose.model('tiquetes', tiqueteSchema);