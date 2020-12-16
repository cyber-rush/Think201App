const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');   
const mongoose=require("mongoose");



mongoose.connect("mongodb://localhost:27017/think201DB" ,{useNewUrlParser:true, useUnifiedTopology:true , useFindAndModify: false});
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Schema
const studentSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    photo:
    {
        data: Buffer,
        contentType: String
    },
    degree:String
});

//Model
const Student = mongoose.model("Student", studentSchema);


/////////////////////////////////////////////////////App Routes///////////////////////////////////////////////////////////////////


app.get("/",function(req,res){
   
    res.render("home");

  
});

app.post("/",function(req,res){
    res.redirect("/entry");
});

app.get("/entry",function(req,res){
    res.render("entry");

});

app.post("/entry",function(req,res){
    res.redirect("/list");
});

app.get("/list",function(req,res){
    res.render("list");
});











app.listen(3000, function() {
    console.log("Server started on port 3000");
  });