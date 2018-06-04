const mongoose = require('mongoose')
const homeworkSchema = require('../db/schemas/homeworkSchema')

const Homework = mongoose.model('homework', homeworkSchema)

module.exports = Homework