const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var registerSchema = new Schema(
    {
        fname :{
            type: String,
            required: true
        },
        lname :{
            type: String,
            required: true
        },
        age :{
            type: String,
            required: true
        },
        email :{
            type: String,
            required: true
        },
        password :{
            type:String,
            require:true
        },
        Confrom_password :{
            type:String,
            require:true
        }


})
module.exports = mongoose.model('register',registerSchema);