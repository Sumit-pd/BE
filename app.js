const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const authRoutes = require('./routes/auth')
const deanRoutes = require('./routes/dean')
const studentRoutes = require('./routes/student')

const port = 5000

mongoose.connect('mongodb+srv://sumit21:1234567890@cluster0.ypaj7rq.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("database connection established successfully");
        app.listen(port, () => {
            console.log(`the server is running on port ${port}`)
        })

    })
    .catch(err => {
        console.log("error while connecting to mongoose \n", err);
    })


app.use(bodyParser.json())
app.use(express.json())

app.use('/auth', authRoutes);
app.use('/student', studentRoutes);
app.use('/dean', deanRoutes);


