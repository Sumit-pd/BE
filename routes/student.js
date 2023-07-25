const express = require('express');
const authenticateUser = require('../middleware/authentication')
const router = express.Router();
const bookedSession = require('../models/bookedSession')
const app = express()

const freesessions = [
    { Day: "Thrusday", time: "10 Am", Duration: "1 hr" },
    { Day: "Friday", time: "10 Am", Duration: "1 hr" },
]



router.get('/freesessions', authenticateUser, async (req, res) => {
    return res.status(200).json(freesessions);
});



router.post('/bookSession', authenticateUser, async (req, res) => {
    const { time, day, name } = req.body;
    try {
        const session = new bookedSession({
            student: name, time, day
        })
        await session.save();
        res.status(200).json({ message: "slot booked" });
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;