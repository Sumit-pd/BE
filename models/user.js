const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    universityId: {
        Type: String,
        unique: true,
        required: true
    },
    password: {
        Type: String,
        required: true
    },
    designation: {
        Type: String,
        required: true
    },
    isLoggedIn: {
        Type: Boolean,
        required: true
    },
});
module.exports = mongoose.model('User', userSchema);