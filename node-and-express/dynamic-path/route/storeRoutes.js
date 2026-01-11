const { getHomes, getBookings, getFavourites, getIndex, getHomeDetail, postAddToFavourites } = require('../controllers/storeController')

const storeRouter = require('express').Router()


storeRouter.get("/", getIndex)
storeRouter.get("/homes", getHomes)
storeRouter.get("/bookings", getBookings)
storeRouter.get("/favourites", getFavourites)
storeRouter.post("/favourites", postAddToFavourites)

storeRouter.get("/homes/:homeId", getHomeDetail)

module.exports = storeRouter