const Favourite = require("../models/favourite")
const Home = require("../models/home")

const getIndex = (req, res, next) => {
  Home.find().then((homes) => {
    res.render("store/index", { pageTitle: "Welcome to airbnb", homes })
  })
}


const getHomes = (req, res, next) => {
  Home.find().then((homes) => {
    res.render("store/home-list", { pageTitle: "airbnb homes list", homes })
  })
}


const getBookings = (req, res, next) => {
  res.render("store/bookings", { pageTitle: "All Booked Homes" })
}


const getFavourites = (req, res, next) => {
  Favourite.find().populate("homeId").then((favourites) => {
    const favHomes = favourites.map(fav => fav.homeId)
    res.render("store/favourite-list", { pageTitle: "Favourite Homes List", homes: favHomes })
  })
}


const postAddToFavourites = async (req, res, next) => {

  try {
    const exist = await Favourite.findOne({ homeId: req.body.id })
    if (exist) {
      console.log("Home exist in favourites");
      return;
    }

    const newFavourite = new Favourite({ homeId: req.body.id })
    await newFavourite.save()

  } catch (error) {
    console.log(error);
  } finally {
    res.redirect("/favourites")
  }
}

const postRemoveFavourite = async (req, res, next) => {
  try {
    const homeId = req.params.homeId
    await Favourite.deleteOne({ homeId })

  } catch (error) {
    if (error) {
      console.log("Someting went wrong on remove favourite home", error);
    }
  } finally {
    res.redirect("/favourites")
  }
}

const getHomeDetail = (req, res, next) => {
  const homeId = req.params.homeId

  Home.findOne({ _id: homeId }).then((home) => {

    if (!home) {
      return res.redirect("/homes")
    }
    res.render("store/home-detail", { pageTitle: "Home Detail Page", matchHome: home })
  })
}

module.exports = { getIndex, getHomes, getBookings, getFavourites, getHomeDetail, postAddToFavourites, postRemoveFavourite }