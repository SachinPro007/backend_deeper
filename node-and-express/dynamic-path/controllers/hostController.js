const Home = require("../models/home")

const getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add your Home on airbnb" })
}


const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body
  const newHome = new Home(houseName, price, location, rating, photoUrl)
  newHome.save()

  res.render("host/home-added", { pageTitle: "Home success page" })
}


const getHostHomes = (req, res, next) => {
  Home.fatchAll((homes) => {
    res.render("host/host-home-list", {pageTitle: "Host Homes List", homes})
  })
}

module.exports = {getAddHome, postAddHome, getHostHomes}