const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const authRoutes = require('./routes/auth')
const deanRoutes = require('./routes/dean')
const studentRoutes = require('./routes/student')
const dotenv = require('dotenv')
const user = require('./models/user')
const bcrypt = require('bcrypt')
const port = 5000
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
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


const hashedPassword = () => {
    return bcrypt.hashSync("123456789", 12)
}
const saveUser = async () => {
    const Rohit = new user({
        universityId : "rana123",
        password : hashedPassword(),
        designation : "Student",

    })
    await Rohit.save() ;
}
// saveUser()

app.use('/auth', authRoutes);
app.use('/student', studentRoutes);
app.use('/dean', deanRoutes);









