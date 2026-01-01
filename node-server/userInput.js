const http = require("http")
const fs = require("fs")
const PORT = 3000


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader(`Content-Type`, `text/html`)
    res.write('<html>')
    res.write('<body>')

    res.write('<h1>Enter Your Details</h1>')

    res.write('<form action="/submit-info" method="POST">')
    res.write('<input type="text" name="username" placeholder="Username"/> <br>')

    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male"/> <br>')
    
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female"/> <br><br>')

    res.write('<button type="submit">Submit</button>')

    res.write('</form>')
    
    res.write('</body>')
    res.write('</html>')
    return res.end()

  }else if(req.url === "/submit-info" && req.method === "POST"){  
    fs.writeFileSync("users.json", "Sachin Sehrawat")
    res.statusCode = 302
    res.setHeader("location", "/")
    return

    // res.setHeader(`Content-Type`, `text/html`)
    // res.write('<html>')
    // res.write('<body><h1>I got your info</h1></body>')
    // res.write(`<body><h1>${"sahcin"}</h1></body>`)
    // res.write('</html>')
    // return res.end()
  }
  res.setHeader(`Content-Type`, `text/html`)
  res.write('<html>')
  res.write('<body><h1>404 page not found</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
  
})
