// Core modules
const path = require('path')

// External modules
const express = require('express')
const mongoose = require('mongoose')

// local module
const rootDir = require('./utils/pathUtil')



const app = express()


// middlewares
app.use(express.urlencoded())
app.use(express.static(path.join(rootDir, "public")))



app.use((req, res, next) => {
  console.log(req.url, req.method);
  res.json({name: "Sachin Sehrawat", role: "Mern Stack Developer", age: 23})  
})



const PORT = 3000;
const DB_URL = "mongodb+srv://sachinsehrawat:CjskBVgfeXVFmvs4@cluster007.me2texx.mongodb.net/todo";
mongoose.connect(DB_URL).then(res => {
  console.log("MongoDB connected");
  
  app.listen(PORT, () => {
    console.log("server run on port: ", PORT);    
  })
}).catch(err => {
  console.log("Something went wrong on connect with DB", err);
  
})