const { getAddHome, postAddHome, getHostHomes } = require('../controllers/hostController')

const hostRouter = require('express').Router()

hostRouter.get("/add-home", getAddHome)
hostRouter.post("/add-home", postAddHome)

hostRouter.get("/edit-home", postAddHome)
hostRouter.get("/host-home-list", getHostHomes)

module.exports = hostRouter