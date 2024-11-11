const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://0.0.0.0/assignment').then(() => {
    console.log('Connection Stablish');
})
module.exports = connection;