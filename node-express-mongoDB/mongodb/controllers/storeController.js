const Favourite = require("../models/favourite")
const Home = require("../models/home")

const getIndex = (req, res, next) => {
  Home.fetchAll().then((homes) => {
    res.render("store/index", { pageTitle: "Welcome to airbnb", homes })
  })
}


const getHomes = (req, res, next) => {
  Home.fetchAll().then((homes) => {
    res.render("store/home-list", { pageTitle: "airbnb homes list", homes })
  })

}


const getBookings = (req, res, next) => {
  res.render("store/bookings", { pageTitle: "All Booked Homes" })
}


const getFavourites = (req, res, next) => {
  Home.fetchAll().then(([homes]) => {
    Favourite.getFavourites().then(([favourites]) => {
      const getFavHomes = homes.filter(home => favourites.some(fav => fav.homeId === home._id))
      res.render("store/favourite-list", { pageTitle: "Favourite Homes List", homes: getFavHomes })
    })
  })
}


const postAddToFavourites = async (req, res, next) => {

  try {
    Favourite.addFavourite(req.body.id)
    res.redirect("/favourites")

  } catch (error) {
    console.log(error);

    res.redirect("/favourites")
  }
}

const postRemoveFavourite = async (req, res, next) => {
  try {
    const homeId = req.params.homeId
    await Favourite.deleteById(homeId)

    res.redirect("/favourites")

  } catch (error) {
    if (error) {
      console.log("Someting went wrong on remove favourite home", error);
    }
    res.redirect("/favourites")
  }
}

const getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId

  Home.findById(homeId).then((home) => {  
    console.log(home);
      
    if (!home) {
      return res.redirect("/homes")
    }
    res.render("store/home-detail", { pageTitle: "Home Detail Page", matchHome: home })
  })
}

module.exports = { getIndex, getHomes, getBookings, getFavourites, getHomeDetail, postAddToFavourites, postRemoveFavourite }