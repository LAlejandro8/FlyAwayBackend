require('dotenv').config()
const express = require('express')
const { dbConnection } = require('./database/config');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
dbConnection()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./route/api/indexRoute')

app.use('/', indexRoute)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Express server puerto ${port}`, 'online');
});