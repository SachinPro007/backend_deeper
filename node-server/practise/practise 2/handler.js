const { inputReqHandler } = require("./inputHandler")
const { sumRequestHandler } = require("./resultHandler")


const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/html')

  if (req.url === "/") {
    res.write(`<html><body>
      <h1>Welcome to Calculator Home Page</h1>      
      <a href="/calulator">Calculator</a>      
    </body></html>`)
    return res.end()

  } else if (req.url === "/calulator") {
    return inputReqHandler(req, res)

  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res)

  }


  res.write(`<html><body>
    <h1>404 Page not found</h1>      
    </body></html>`)
  res.end()


}


module.exports = { requestHandler }