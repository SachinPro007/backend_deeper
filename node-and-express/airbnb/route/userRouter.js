const express = require('express')
const userRouter = express.Router()


userRouter.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to airbnb home page</h1>
    <a href="/host/add-home" > add Home</a>  
  `)
})


module.exports = userRouter