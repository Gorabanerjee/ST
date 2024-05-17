const express = require("express");
const router = express.Router();
var registerModel = require('../src/register/registerModel');

//inserting data into database
router.post('/register/create', async(req,res)=>{
    try{
        const register = new registerModel(req.body);
        await register.save();

        res.status(201).send({
            status : true,
            message : "registers created successfully"
        });
    } catch (error){
        res.status(400).send(error);
    }
});
//reading data from
router.get('/registerDetails/', async(req,res)=>{
    try {
        const registers = await registerModel.find({});
        res.send(registers);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;