var express = require("express");
var router = express.Router();
// const fetch = require('node-fetch')
const employeeService = require('../services/employeeService');



router.get('/getEmployee',(req, res)=>{
   return employeeService.employeeDetails(req,res); 
});

router.get('/totalEmployees',employeeService.totalEmployees);

router.post('/createEmployee', employeeService.addingEmployee);

router.put('/update/:id',(req, res)=>{
    return employeeService.updatingEmployee(req,res);
})

// router.get('get', async(req, res)=>{
//     const api_url ='localhost:5000/employee/getEmployee'
//     const response = await fetch(api_url)
//     const json = await response.json()
//     res.json(json)
//   })

router.delete('/delete/:id', employeeService.deleteEmployee)

module.exports = router;