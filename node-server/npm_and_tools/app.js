const http = require("http");
const { logical } = require("./logical");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // res.setHeader("Content-Type", "text/html")
  // res.write("<div>sachin</div>")
  logical()
  

})


server.listen(3000, () => {
  console.log("server runing on port", 3000);
  
})