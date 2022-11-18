const express = require('express')// calling all the functionalities of express
const todoSchema = require('../models/todoSchema')// the dots are to take me out f the router

const router = express.Router(); //calling the functionalities of router

router.post("/todos", async(req,res) => {  //post helps us create data
    //console.log("posting my todos")
    const todo  = req.body
    const todoData = new todoschema(todo)
     try{                              // helps us partition work
        await todoData.save()             //incase it takes time
        return res.status(200).send(todoData)
     } catch(error){
        res.status(400).send(error)
     }
}) 

router.get('/todos', async(req, res)=>{
   todoSchema.find({}).then((todos)=>{
      return res.status(200).send(todos)
   }).catch ((error)=>{
      res.status(400).send(error)
   })
})


module.exports =router;