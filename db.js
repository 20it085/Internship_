const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://burgerdb:burgerdb@burgerdb.qwsiw5j.mongodb.net/burgerdb'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=> {
    console.log('Mongodb connection successfull');
})
db.on('error', ()=> {
    console.log('Mongodb connection failed');
})

module.exports = mongoose