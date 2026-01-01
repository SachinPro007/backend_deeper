const http = require("http");
const { requestHandler } = require("./userInput");
const PORT = 3000;



const server = http.createServer(requestHandler)

server.listen(PORT, () => {
  console.log(`Server runing on Port: ${PORT}`);
  
})