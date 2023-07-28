const express = require('express');
const authenticateUser = require('../middleware/authentication')
const router = express.Router();
const dean = require('../models/dean')
const app = express()






router.get('/freesessions', authenticateUser, async (req, res) => {
    try {
      const availableDeans = await dean.aggregate([
        { $unwind: "$schedule" },
        { $match: { "schedule.isBooked": false } },
        {
          $project: {
            name: 1,
            "schedule.day": 1,
            "schedule.time": 1,
            _id: 0
          }
        }
      ]);
  
      const deanSchedule = availableDeans.map((dean) => {
        return {
          name: dean.name,
          day: dean.schedule.day,
          time: dean.schedule.time
        };
      });
  
      res.status(200).json(deanSchedule);
    } catch (error) {
      console.error("Error occurred while searching for free sessions \n", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  



router.post('/bookSession', authenticateUser, async (req, res) => {
    const { time, day, name, deanName } = req.body;
    if (!time || !day || !name || !deanName) {
        return res.status(422).json({ Error: "fill the required fields" })
    }
    try {
        await dean.updateMany({
            "name": deanName,
            'schedule.day': day
        },
            {
                $set: {
                    'schedule.$.isBooked': true,
                    'schedule.$.bookedBy': name
                }
            }
        )
        res.status(200).json({ message: "slot booked sucessfully" })
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;