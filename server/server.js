// we make up the api in the server an where it wil listen and the express varible
const express = require("express");
const app = express()

//api
app.get("/api",(req,res)=>{
    res.json({"firstname":["Abdul","Monk","Mario","tootall","pimp"]})
})

//listen
app.listen(5000,()=>{console.log("dumb hoe")})

