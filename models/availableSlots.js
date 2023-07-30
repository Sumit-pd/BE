const mongoose = require('mongoose')
const availableSlotsSchema = new mongoose.Schema({
    day: { type: String, required: true },
    time: { type: String, required: true },
    Isbooked: { type: Boolean, default: false },
    dean: { type: String, required: true }
})
module.exports = mongoose.model('availableSlot', availableSlotsSchema)