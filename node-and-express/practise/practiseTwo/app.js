const express = require('express')
const path = require('path')
const userRouter = require('./route/userRoute')



const app = express()
app.use(express.urlencoded())

app.use(userRouter)
app.use("/host", hostRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
  
})