const hostRouter = require('express').Router()
const path = require('path')

const rootDir = require('../utils/pathUtil')


hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})



hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);  
  res.sendFile(path.join(rootDir, 'views', 'homeAdd.html'))
})



module.exports = hostRouter