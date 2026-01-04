const app = require("express")()
const { requestHandler } = require("./userInput");
const PORT = 3000;


// const app = express()

app.use((req, res, next) => {
  console.log("log in first middleware", req.url, req.method);
  next()
})

app.use((req, res, next) => {
  console.log("log in second middleware", req.url, req.method);
  res.send("<p>Welcome to home page</p>")
})



app.listen(PORT, () => {
  console.log(`Server runing on Port: ${PORT}`);

})