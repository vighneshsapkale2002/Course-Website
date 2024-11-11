const express = require('express')
const mongoose = require('mongoose')
const connection = require('./config/database')
const userModels = require("./models/user")

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('index')
})


app.post('/get-form', async (req, res) => {
    const { name, email, mobile, message } = req.body
    await userModels.create({
        name: name,
        email: email,
        mobile: mobile,
        message: message
    })
    res.send('Data Inserted')
})



app.listen(3000, () => {
    console.log('Server Ready');

})

