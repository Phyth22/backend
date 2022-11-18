const mongoose = require('mongoose'); //calling the functions of mongoose to be applicable inthe file server.js
// mongoose helps to connect  node js to mongo db

const express =  require('express')
const Router = require('./Router/router')
const cors=require('cors')
const app = express() // this is whenever we are using the functionalities  of express we app

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



  // used to send through an http request body
  app.use('/',Router) //helping us use other files to specify the files
  // app.use (express.json)
  

   // mongoose link
const url="mongodb+srv://<username>:<password>@codequeen7.cmy9d5b.mongodb.net/test"
 app.use(cors())

 app.get('/',(req,res)=>{
  res.status(200).sendFile(__dirname +"/todo.html") // a response for the status code
 })

 app.use(express.static('src'))
//creating a port number - a port is a vitual point where network connections start and end 
const port = 8000;
app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})