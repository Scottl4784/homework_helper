const Schema = require('mongoose').Schema


const homeworkSchema = new Schema({
    title: {
        type: String,
        required: true
    }
    description: String,
    subject: String,
    createdBy: String,
    dueDate: {
        type: Date,
        default: new Date()
    }
});

module.exports = homeworkSchema