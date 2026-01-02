const http = require("http")
const PORT = 3000

const navItems = ["Home", "Men", "Women", "Kids", "Cart"]


const server = http.createServer((req, res) => {
  res.write(`<html><body>
    <nav>
      ${navItems.map(item => {
    return `<a href=${`/${item === "Home" ? "" : item.toLowerCase()}`}>${item}</a>`
  })}    
    </nav>

    <div>
    <h1>
    ${
      req.url === "/" ? "Welcome to Home page" :
      req.url === "/men" ? "Welcome to Mens Fashion page" :
      req.url === "/women" ? "Welcome to Women Winter Style page" : 
      req.url === "/kids" ? "Welcome to Kids toys store page" : "Welcome to Your Cart page"
    }
    </h1>
    </div>
  
  </body></html>`)

  res.end()

})


server.listen(PORT, () => {
  console.log(`Server runing on Port: ${PORT}`);

})