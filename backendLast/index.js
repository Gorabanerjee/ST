const express =require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var routers = require('./routes/routes')

const app =express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());
app.use(routers);

//database connection 
const dbURL = "mongodb://127.0.0.1/Stream_Flix";
mongoose.connect(dbURL);
const connection = mongoose.connection;

app.listen(port, ()=>{
    console.log(`Server is runing on port : ${port}`);
})

connection.once("open",()=>{
    console.log("Database connection succesfully");
})

