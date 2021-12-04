const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.Port ||4000;

const statpath=path.join(__dirname,("../public"));

// public static path
app.set("view engine","hbs");

app.use(express.static(statpath));


// routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(port,()=>{
    console.log(`listening to port at ${port}`);
})
