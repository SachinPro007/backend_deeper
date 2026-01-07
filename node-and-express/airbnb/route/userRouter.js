const express = require('express')
const { getHomes } = require('../controllers/homes')
const userRouter = express.Router()
// const path = require('path')

// const rootDir = require('../utils/pathUtil')
// const { homes } = require('../controllers/homes')


userRouter.get("/", getHomes)


module.exports = userRouter