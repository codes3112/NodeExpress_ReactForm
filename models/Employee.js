const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
 firstName:{
     type:String,
     required: true
    },
 lastName:{
     type:String,
     required: true
    },
 empID:Number,
 email:{
     type:String,
     required: true
    },
 city:String
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);