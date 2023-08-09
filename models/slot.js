const mongoose = require('mongoose')
const availableSlotsSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    Isbooked: {
        type: Boolean,
        default: false
    },
    deanName: {
        type: String,
        required: true
    },
    bookedBy: {
        type: String,
        default: null
    }
})
module.exports = mongoose.model('availableSlot', availableSlotsSchema)