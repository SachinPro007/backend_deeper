const express = require('express')
const path = require("path")

const rootDir = require("./utils/pathUtil")
const contactRouter = require('./route/contactRoute');
const userRouter = require('./route/userRouter');

const app = express()
const PORT = 3000



app.use("/", (req, res, next) => {
  console.log("request path ", req.url);
  next()

})

app.use("/", (req, res, next) => {
  console.log("request method ", req.method);
  next()
})

// parse the body
app.use(express.urlencoded())

app.use(userRouter)
app.use("/contact", contactRouter)


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})


app.listen(PORT, () => {
  console.log("server runing on prot ", PORT);
})