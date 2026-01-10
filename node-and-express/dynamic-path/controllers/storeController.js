const Home = require("../models/home")

const getIndex = (req, res, next) => {
  Home.fatchAll((homes) => {
    res.render("store/index", { pageTitle: "Welcome to airbnb", homes })
  })
}


const getHomes = (req, res, next) => {
  Home.fatchAll((homes) => {
    res.render("store/home-list", { pageTitle: "airbnb homes list", homes })
  })
}


const getBookings = (req, res, next) => {
  res.render("store/bookings", {pageTitle: "All Booked Homes"})
}


const getFavourites = (req, res, next) => {
  res.render("store/favourite-list", {pageTitle: "Favourite Homes List"})
}


module.exports = { getIndex, getHomes, getBookings, getFavourites }