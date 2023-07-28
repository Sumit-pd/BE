const mongoose = require('mongoose')
const sessionSchema = mongoose.Schema({
    student: String,
    time: String,
    day: String,
    dean: String ,
    isBooked : Boolean
})
module.exports = mongoose.model('Session', sessionSchema)