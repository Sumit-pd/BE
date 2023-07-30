const express = require('express');
const authenticateUser = require('../middleware/authentication');
const router = express.Router();
const bookedSlot = require('../models/bookedSlots')



router.post('/pendingsessions', authenticateUser, async (req, res) => {
  const { name } = req.body;
  try {
    const data = await bookedSlot.find({ "deanName": name }).select('studentName deanName time day');
    res.status(200).json(data)




  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
});


module.exports = router;
