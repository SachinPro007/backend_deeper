const http = require("http")

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-Type", "text/html")
  res.write("<div>sachin</div>")
  

})


server.listen(3000, () => {
  console.log("server runing on port", 3000);
  
})