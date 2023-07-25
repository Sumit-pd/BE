const express = require('express');
const authenticateUser = require('../middleware/authentication');
const router = express.Router();
const bookedSession = require('../models/bookedSession');

router.get('/pendingsessions',authenticateUser , async (req, res) => {
    try {
        const pendingSession = await bookedSession.find();
        res.status(200).json(pendingSession);
    } catch (error) {
        console.log(error);
        res.status(500).json({ "Error": "internal server error" });
    }
});

module.exports = router;
