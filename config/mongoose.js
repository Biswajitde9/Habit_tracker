const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/habit_tracker');

const db = mongoose.connection;

db.on('error',console.log.bind(console,"error connection to monogoDB "));

db.once('open',()=>{
    console.log("Succesfully Connecting to the mongoDB");
})