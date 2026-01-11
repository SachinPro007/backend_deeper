const Favourite = require("../models/favourite")
const Home = require("../models/home")

const getIndex = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render("store/index", { pageTitle: "Welcome to airbnb", homes })
  })
}


const getHomes = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render("store/home-list", { pageTitle: "airbnb homes list", homes })
  })
}


const getBookings = (req, res, next) => {
  res.render("store/bookings", { pageTitle: "All Booked Homes" })
}


const getFavourites = (req, res, next) => {
  Favourite.getFavourites((favourites) => {
    Home.fetchAll((homes) => {
      const getFavHomes = homes.filter(home => favourites.includes(home.id))      
      
      res.render("store/favourite-list", { pageTitle: "Favourite Homes List", homes: getFavHomes })
    })
    
  })
}


const postAddToFavourites = (req, res, next) => {
  Favourite.addFavourite(req.body.id, (err) => {
    if (err) {
      console.log(err);      
    }
    res.redirect("/favourites")
  })
}

const getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId

  Home.findById(homeId, (matchHome) => {
    if (!matchHome) {
      return res.redirect("/homes")
    }
    res.render("store/home-detail", { pageTitle: "Home Detail Page", matchHome })
  })
}

module.exports = { getIndex, getHomes, getBookings, getFavourites, getHomeDetail, postAddToFavourites }