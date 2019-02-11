const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const apiRouter = require('./routes/api')

const app = express()

const { USERNAME_DB, PASSWORD_DB } = require('./constants')
mongoose.connect(`mongodb://${USERNAME_DB}:${PASSWORD_DB}@ds125945.mlab.com:25945/todo`, { useNewUrlParser: true })

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', apiRouter)

module.exports = app
