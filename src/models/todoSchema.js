const mongoose = require("mongoose")// mongoose here hepls us stracture data
const schema = mongoose.Schema;

const todoschema = new schema({

    activity:{
        type: String,
        required:true, // the value should be implimented

    },
    iscompleted:{     //this more like a checkbox when activity is done  then it returns true when not done it returns false
        type:Boolean,   // Boolean  helps return values either 
        required:true,
        default:false
    }
    })
  


 const Todo = mongoose.model
 ("todoSchema", todoschema)
 module.exports = Todo

 