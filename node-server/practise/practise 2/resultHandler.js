const fs = require("fs")
const { URLSearchParams } = require("url")

const sumRequestHandler = (req, res) => {
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



}


module.exports = {sumRequestHandler}