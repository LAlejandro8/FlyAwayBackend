const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    res.json({'Hola': 'Destinos'})
})




module.exports = app