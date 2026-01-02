const fs = require("fs")
const { URLSearchParams } = require("url")

const sumRequestHandler = (req, res) => {
  const body = []
  let result;
  req.on("data", (chunk) => {
    console.log("log in chunk");
    body.push(chunk)
  })

  req.on("end", () => {
    console.log("log in end");

    const fullBody = Buffer.concat(body).toString()
    const params = new URLSearchParams(fullBody)
    const numbers = Object.fromEntries(params)

    result = parseInt(numbers.numberOne) + parseInt(numbers.numberTwo)

    // Blocking code
    // fs.writeFileSync("result.json", JSON.stringify({ result: result }))

    // Async Opration
    fs.writeFile("result.json", JSON.stringify({ result: result }), (err) => {
      console.log("run after data writen");

      res.write(`<html><body>
        <h1>Result</h1>      
        <h1>${result}</h1>      
      </body></html>`)

      return res.end()

    })

  })

  console.log("log outer");

}


module.exports = { sumRequestHandler }