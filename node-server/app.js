const http = require("http")
const PORT = 3000

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // res.setHeader(`Content-Type`, `application/json`)
  if (req.url === "/") {
    res.setHeader(`Content-Type`, `text/html`)
    res.write('<html>')
    res.write('<body><h1>Welcome to Home page</h1></body>')
    res.write('</html>')
    return res.end()

  } else if (req.url === "/products") {
    res.setHeader(`Content-Type`, `text/html`)
    res.write('<html>')
    res.write('<body><h1>Welcome to Products page</h1></body>')
    res.write('</html>')
    return res.end()

  }
  res.setHeader(`Content-Type`, `text/html`)
  res.write('<html>')
  res.write('<body><h1>404 page not found</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);

})