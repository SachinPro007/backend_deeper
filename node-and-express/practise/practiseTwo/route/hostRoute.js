const hostRouter = require('express').Router()
const path = require("path")


hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"))
})


hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  
  res.sendFile(path.join(__dirname, "../", "views", "homeAdd.html"))
})

module.exports = hostRouter
