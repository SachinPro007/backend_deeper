const app = require("express")()
const { requestHandler } = require("./userInput");
const PORT = 3000;


// const app = express()

app.use("/", (req, res, next) => {
  console.log("log in first middleware", req.url, req.method);
  // res.send("<p>log in first middleware</p>")
  next()
})

app.post("/submit", (req, res, next) => {
  console.log("log in second middleware", req.url, req.method);
  res.send("<p>Welcome to submit page</p>")
})

app.use("/", (req, res, next) => {
  console.log("log in another middleware", req.url, req.method);
  res.send("<p>log in another middleware</p>")
  next()
})





app.listen(PORT, () => {
  console.log(`Server runing on Port: ${PORT}`);

})