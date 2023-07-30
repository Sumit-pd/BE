const jwt = require('jsonwebtoken')
const key = "sumit-prd"
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ Error: "token not present" });
    }
    jwt.verify(token.replace("Bearer ", ""), key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = decoded;
        next()
    })
}

module.exports = authenticateUser;