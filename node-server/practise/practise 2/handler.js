const fs = require("fs")
const { URLSearchParams } = require("url")


const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write(`<html><body>
      <h1>Welcome to Homw Page</h1>      
      <a href="/calulator">Calculator</a>      
    </body></html>`)
    return res.end()

  } else if (req.url === "/calulator") {
    res.setHeader(`Content-Type`, `text/html`)
    res.write('<html>')
    res.write('<body>')

    res.write('<h1>Enter Your 2 Numbers to calculate</h1>')

    res.write('<form action="/calculate-result" method="POST">')
    res.write('<input type="number" name="numberOne" placeholder="Number one"/>')
    res.write('<span> + </span>')
    res.write('<input type="number" name="numberTwo" placeholder="Number 2"/>')


    res.write('<button type="submit">Submit</button>')

    res.write('</form>')

    res.write('</body>')
    res.write('</html>')
    return res.end()

  } else if (req.url === "/calculate-result" && req.method === "POST") {

    const body = []
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk)
    })

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody);

      const params = new URLSearchParams(fullBody)
      console.log(params);

      const numbers = Object.fromEntries(params)
      console.log(numbers);

      const sum = parseInt(numbers.numberOne) + parseInt(numbers.numberTwo)
      console.log(sum);

      res.write(`<html><body>
        <h1>Result</h1>      
        <h1>${sum}</h1>      
      </body></html>`)

      fs.writeFileSync("result.json", JSON.stringify({ result: sum }))
  
      return res.end()
    })




  } else {
    res.write(`<html><body>
      <h1>Page not found</h1>      
    </body></html>`)
    res.end()

  }
}


module.exports = {requestHandler}