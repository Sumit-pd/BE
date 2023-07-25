const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Student', studentSchema)