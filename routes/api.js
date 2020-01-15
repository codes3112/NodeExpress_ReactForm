const express = require("express");
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res, next)=>{
    //res.send("Api is working !!");
    try{
        const employees = await Employee.find();
        res.json(employees);

    }catch(err){
        res.json({message: err});
    }

});
router.post('/', async (req,res) =>{
    console.log(req.body);
    const newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        empId: req.body.empId,
        email:req.body.email,
        city: req.body.city
    });
    try{
        const savedEmp = await newEmployee.save();
        res.json(savedEmp);
    }catch(err){
        res.json({message: err});

    }
});
    



module.exports = router;