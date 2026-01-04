const hostRouter = require('express').Router()



hostRouter.get("/add-home", (req, res, next) => {
  res.send(`
    <h1>Register your home here</h1>
    <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter your home" />
      <input type="submit" />    
    </form>
  `)
})



hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  
  res.send(`<div>
    <h1>Register your home successfully</h1>
    <a href='/'>Go to Home</a>
  </div>`)
})



module.exports = hostRouter