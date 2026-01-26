const exampleRoute = require('express').Router()

exampleRoute.get("/", (req, res, next) => {
  res.json({example: "Welcome to here......"})
})



module.exports = exampleRoute