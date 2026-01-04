const app = require('express')()
const PORT = 3000



app.use("/", (req, res, next) => {
  console.log("request path ", req.url);
  next()

})

app.use("/", (req, res, next) => {
  console.log("request method ", req.method);
  next()
})


app.get("/", (req, res, next) => {
  console.log("log in home page response middleware");
  return res.send(`<div><h1>Welcome to home page</h1> <a href=${"/contact"}>Contact page</a><div>`)


})

app.get("/contact", (req, res, next) => {
  console.log("log in contact page on get method");
  res.send(`<div>
    <form action="/contact" method='POST'>
      <input type='text' name='username' placeholder='Enter your username'/>
      <input type='email' name='email' placeholder='Enter your email'/>

      <button type='submit'>Submit</button>
    </form>
  </div>`)  
})

app.post("/contact", (req, res, next) => {
  console.log("log in contact page on Post method");
  console.log(req.body);

  res.send(`<div>I got you details successfully</div>`) 
})


app.listen(PORT, () => {
  console.log("server runing on prot ", PORT);
})