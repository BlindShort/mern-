const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')


const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

mongoose.connect("mongodb://127.0.0.1:27017/food");
const typeSchema = mongoose.Schema({
   email: {
    type: String,
    required: true
  },
   password:{
    type: String,
    required: true
  }

})
const item = mongoose.model("item",typeSchema)

app.post("/signup",function(req,res){
    const newUser = item({
        email : req.body.email,
        password : req.body.password
        
    })
    newUser.save()
    .then(()=>{
        console.log(err)
    })
    .catch(()=>{
        res.render("secret")
    })
    
})

app.post("/login",function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    item.findOne({email:email},(err,foundUser))
   /* .then((foundUser)=>{
    })
    .then((foundUser.password === password))
    .then((foundUser)=>{
        req.render("home");
    })
    .catch((err)=>{
        console.log(err)
    })*/
   })

app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login")
})
app.get("/signup",function(req,res){
    res.render("signup")
})

app.get("/secret",function(req,res){
    res.render("secret")
})

app.listen(3000,function(){
    console.log("Server start")
})