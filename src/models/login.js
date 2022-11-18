
//a login Schema using moongoose- another method
const mongoose =require("mongoose")
const schema = mongoose.Schema  //
const login = new Schema({
   username:{
       type:String,
       require:true

   },
   password:{
       type:String,
       required:true
   },
   gender:{
       type:Boolean,
       required:true
   },
})
const details =mongoose.model("login",login)//moongoose.model collects a copy of you schema
module.exports= details // we are exporting the details