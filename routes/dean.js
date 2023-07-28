const express = require('express');
const authenticateUser = require('../middleware/authentication');
const router = express.Router();
const dean = require('../models/dean')



router.post('/pendingsessions', authenticateUser, async (req, res) => {
    const { name } = req.body;
    try {
      const pendingSession = await dean.aggregate([
        { $match: { name: name } },
        {
          $project: {
            _id: 0,
            schedule: {
              $filter: {
                input: "$schedule",
                as: "slot",
                cond: {
                  $and: [
                    { $eq: ["$$slot.isBooked", true] },
                    { $ne: ["$$slot.bookedBy", null] }
                  ]
                }
              }
            }
          }
        }
      ]);
  
      const data = pendingSession.map(dean => {
        return dean.schedule.map(curElem => {
          return {
            day: curElem.day,
            time: curElem.time,
            bookedBy: curElem.bookedBy
          };
        });
      });
  
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Error: "Internal server error" });
    }
  });
  
  
module.exports = router;
