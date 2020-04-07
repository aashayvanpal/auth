const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blog-video')
    .then(function () {
        console.log('connected to db')
    })
    .catch(function () {
        console.log('error connecting to db')
    })

module.exports = { mongoose }