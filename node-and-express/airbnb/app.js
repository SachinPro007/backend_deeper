const express = require('express')
const parser = require('body-parser')
const path = require('path')


const userRouter = require('./route/userRouter')
const hostRouter = require('./route/hostRouter')
const PORT = 3000

const app = express()


// app.use(parser.urlencoded())
app.use(express.urlencoded())

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next()
})

app.use(userRouter)
app.use("/host", hostRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})




app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);

})