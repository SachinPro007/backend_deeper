const contactRouter = require("express").Router()
const path = require("path")
const fs = require("fs")

const rootDir = require("../utils/pathUtil")
const users = require('../users.json')

contactRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"))
})

contactRouter.post("/", (req, res, next) => {
  console.log(req.body);
  fs.writeFile("users.json", JSON.stringify([...users, req.body]), (err) => {
    console.log(err);
    
  })
  
  
  res.sendFile(path.join(rootDir, "views", "contactSuccess.html"))
})


module.exports = contactRouter