// core module
const path = require('path')

// external module
const express = require('express')
const parser = require('body-parser')

// local module
const userRouter = require('./route/userRouter')
const hostRouter = require('./route/hostRouter')
const rootDir = require('./utils/pathUtil')



const PORT = 3000
const app = express()


// app.use(parser.urlencoded())
app.use(express.urlencoded())
app.use(express.static(path.join(rootDir, "public")))

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next()
})

app.use(userRouter)
app.use("/host", hostRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})



app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);

})