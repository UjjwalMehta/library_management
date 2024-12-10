const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfully');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = connection;