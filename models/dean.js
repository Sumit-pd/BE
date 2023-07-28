const mongoose = require('mongoose');

const deanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schedule: [
    {
      day: { type: String, required: true },
      time: { type: String, required: true },
      isBooked: { type: Boolean, default: false },
      bookedBy: { type: String, default: null },
    }
  ],
});

module.exports = mongoose.model('Dean', deanSchema);
