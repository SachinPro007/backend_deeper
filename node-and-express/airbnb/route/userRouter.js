const express = require('express')
const userRouter = express.Router()
const path = require('path')

const rootDir = require('../utils/pathUtil')
const { homes } = require('./hostRouter')


userRouter.get("/", (req, res, next) => {
  // console.log(homes);
  
  res.render("home", {homes, pageTitle: "airbnb home page"})
})


module.exports = userRouter