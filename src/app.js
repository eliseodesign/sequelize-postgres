const express = require('express')
const cors = require('express')
const port = require('../config/config').PORT

const app = express()

app.set('port',port)
app.use(express.json())
app.use(cors())

module.exports = app