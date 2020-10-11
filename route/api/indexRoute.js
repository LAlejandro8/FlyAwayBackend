const express = require('express')
const app = express()

const tiquetesRoute = require('./tiquetesRoute')
const destinosRoute = require('./destinosRoute')

app.use('/tiquetes', tiquetesRoute)
app.use('/destinos', destinosRoute)

module.exports = app