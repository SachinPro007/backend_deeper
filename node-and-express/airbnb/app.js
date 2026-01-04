const express = require('express')
const parser = require('body-parser')
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




app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);

})