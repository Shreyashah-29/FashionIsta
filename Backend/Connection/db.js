const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB)

var db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to Mongodb');
})

db.on('error',(error)=>{
    console.error('connection error',error);
})

module.exports = mongoose 