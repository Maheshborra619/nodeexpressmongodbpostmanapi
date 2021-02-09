const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    technology:{
        type:String,
        required:true
    },
    subscribe:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('empSchema',employeeSchema)