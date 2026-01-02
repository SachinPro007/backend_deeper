const http = require("http")
const PORT = 3000
// const { result } = require("./result.json")
const { requestHandler } = require("./handler")


const server = http.createServer(requestHandler)


server.listen(PORT, () => {
  console.log("server runing on port: ", PORT);

})