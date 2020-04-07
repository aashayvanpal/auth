const express = require('express')
const { mongoose } = require('./config/database.js')
const app = express()
const port = 3002
const { usersRouter } = require('./app/controllers/UsersController.js')

app.use(express.json())

app.use('/users', usersRouter)

app.listen(port, function () {
    console.log('listening to port :', port)
})
