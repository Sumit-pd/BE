const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const val = "sumit-prd"
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.post('/user/login', async (req, res) => {
    const { universityId, password } = req.body;
    try {
        const user = await User.findOne({ "universityId": universityId });
        if (!user) {
            return res.status(401).json({ error: "Invalid email" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" })
        }
        await User.updateOne(
            { "universityId": universityId },
            {
                $set: { isLoggedIn: true }
            }
        )
        const data = {
            universityId, password
        }
        const token = jwt.sign(data, val);
        res.status(200).json(token);
    } catch (error) {
        console.log("error while  login ", error);
        res.status(500).json({ Error: "internal server error" });
    }
});

router.post('/user/logout', async (req, res) => {
    const { universityId } = req.body;
    try {
        await User.updateOne(
            { "universityId": universityId }, { $set: { isLoggedIn: false } }
        );
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error while logging out \n", error);
        return res.status(500).json({ Error: "Internal server error" });
    }
});


module.exports = router;
