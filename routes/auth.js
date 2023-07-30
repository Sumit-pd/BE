const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const val = "sumit-prd"


router.post('/student/login', async (req, res) => {
    const { id, password } = req.body;
    try {
        const student1 = {
            id, password
        };
        if (!val) {
            return res.status(500).json({ Error: "Secret key is not set" });
        }
        const token = jwt.sign(student1, val);

        res.status(200).json(token);
    } catch (error) {
        console.log("error while student login ", error);
        res.status(500).json({ Error: "internal server error" });
    }
});

router.post('/dean/login', async (req, res) => {
    const { id, password } = req.body;
    try {
        const dean1 = {
            id, password
        };
        if (!val) {
            return res.status(500).json({ Error: "Secret key is not set" });
        }
        const token = jwt.sign(dean1, val);

        res.status(200).json(token);
    } catch (error) {
        console.log("error while dean login ", error);
        res.status(500).json({ Error: "internal server error" });
    }
});

module.exports = router;
