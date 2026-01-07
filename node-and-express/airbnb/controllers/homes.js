const getAddHome = (req, res, next) => {
  res.render("addHome", {pageTitle: "Home input page"})
}


const homes = []
const postAddHome = (req, res, next) => {
  console.log(req.body);  
  homes.push(req.body)
  res.render("homeAdd", {pageTitle: "Home Added Success"})
}

const getHomes = (req, res, next) => {  
  res.render("home", {homes, pageTitle: "airbnb home page"})
}




module.exports = {getAddHome, postAddHome, getHomes}