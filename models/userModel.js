const mongoose = require("mongoose");
const userScheme = mongoose.Schema({
    name:{type:String ,require},
    email:{type:String ,require},
    password:{type:String ,require},
    isAdimin:{type:Boolean,require,default:false},
}, {
    timestamps:true,
})

module.exports = mongoose.model('users',userScheme)