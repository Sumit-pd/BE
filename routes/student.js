const express = require('express');
const authenticateUser = require('../middleware/authentication')
const router = express.Router();
const slots = require('../models/slot')






router.get('/freesessions', authenticateUser, async (req, res) => {
  try {
    const data = await slots.find({ Isbooked: false }).select('day time deanName')

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
    await slots.updateOne(
      { 'deanName': deanName , day : day},
      {
        $set: { "Isbooked": true , "bookedBy" : name }
      }
    )
    res.status(200).json({ message: "Slot booked sucessfully" })
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;