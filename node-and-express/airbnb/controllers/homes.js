const Home = require("../models/home");

const getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Home input page" })
}



const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body

  const home = new Home(houseName, price, location, rating, photoUrl)
  home.save()
  res.render("homeAdd", { pageTitle: "Home Added Success" })
}

const getHomes = async (req, res, next) => {
  Home.fetchAll(homes => {
    res.render("home", { homes, pageTitle: "airbnb home page" })
  })  

}




module.exports = { getAddHome, postAddHome, getHomes }