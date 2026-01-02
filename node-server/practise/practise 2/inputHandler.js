const inputReqHandler = (req, res) => {
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
}


module.exports = {inputReqHandler}