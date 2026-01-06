const hostRouter = require('express').Router()
const path = require('path')

const rootDir = require('../utils/pathUtil')


hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {pageTitle: "Home input page"})
})



const homes = []
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);  
  homes.push(req.body)
  res.render("homeAdd", {pageTitle: "Home Added Success"})
})



module.exports = {hostRouter, homes}