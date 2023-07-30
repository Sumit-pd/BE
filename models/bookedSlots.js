const mongoose = require('mongoose');

const bookedSlotsSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  deanName: { type: String, required: true },
  time: { type: String, required: true },
  day: { type: String, required: true }
});

module.exports = mongoose.model('bookedSlot', bookedSlotsSchema);
