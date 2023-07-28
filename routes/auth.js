const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const key = "process.env.key"

router.post('/student/login', async (req, res) => {
    const { id, password } = req.body;
    try {
        const student1 = {
            id, password
        }
        token = jwt.sign(student1,key)


        res.status(200).json(token);


    }
    catch (error) {
        console.log("error while student login ", error)
        res.status(500).json({ Error: "internal server error" })
    }
})
router.post('/dean/login', async (req, res) => {
    const { id, password } = req.body;
    try {
        const dean1 = {
            id, password
        }
        token = jwt.sign(dean1,key)


        res.status(200).json(token);


    }
    catch (error) {
        console.log("error while student login ", error);
        res.status(500).json({ Error: "internal server error" });
    }
})
module.exports = router