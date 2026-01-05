const userRouter = require('express').Router()
const path = require("path")


userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"))
})

module.exports = userRouter