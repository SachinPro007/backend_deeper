const { getHomes, getBookings, getFavourites, getIndex } = require('../controllers/storeController')

const storeRouter = require('express').Router()


storeRouter.get("/", getIndex)
storeRouter.get("/home", getHomes)
storeRouter.get("/bookings", getBookings)
storeRouter.get("/favourites", getFavourites)

module.exports = storeRouter