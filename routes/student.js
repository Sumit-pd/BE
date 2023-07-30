const express = require('express');
const authenticateUser = require('../middleware/authentication')
const router = express.Router();
const availableSlots = require('../models/availableSlots');
const bookedSlot = require('../models/bookedSlots')
const app = express()






router.get('/freesessions', authenticateUser, async (req, res) => {
  try {
    const data = await availableSlots.find({ Isbooked: false })

    res.status(200).json(data);
  } catch (error) {
    console.error("Error occurred while searching for free sessions \n", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




router.post('/bookSession', authenticateUser, async (req, res) => {
  const { day, name, deanName } = req.body;
  if (!day || !name || !deanName) {
    return res.status(422).json({ Error: "fill the required fields" })
  }
  try {
    await availableSlots.updateOne(
      { 'dean': deanName, "day": day },
      {
        $set: { "Isbooked": true }
      }
    )
    const newSlot = new bookedSlot({
      studentName: name,
      deanName: deanName,
      time: "10 am",
      day: day
    })
    await newSlot.save();
    res.status(200).json({ message: "Slot booked sucessfully" })
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;