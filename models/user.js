const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    universityId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default : false
    },
});
module.exports = mongoose.model('User', userSchema);