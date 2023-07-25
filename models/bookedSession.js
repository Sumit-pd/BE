const mongoose = require('mongoose')
const sessionSchema = mongoose.Schema({
    student: String,
    time: String,
    day: String
})
module.exports = mongoose.model('Session', sessionSchema)