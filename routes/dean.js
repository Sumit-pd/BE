const express = require('express');
const authenticateUser = require('../middleware/authentication');
const router = express.Router();
const slots = require('../models/slot')



router.post('/pendingsessions', authenticateUser, async (req, res) => {
  const { name } = req.body;
  try {
    const data = await slots.find({ "deanName": name, "Isbooked": true }).select('bookedBy time day');
    res.status(200).json(data)

  } catch (error) {
    console.error(error);
    res.status(500).json({ Error: "Internal server error" });
  }
});


module.exports = router;
