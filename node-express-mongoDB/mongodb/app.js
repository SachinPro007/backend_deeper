const express = require('express')
const path = require('path')
const rootDir = require('./utils/pathUtil')
const { pageNotFound } = require('./controllers/error')
const storeRouter = require('./route/storeRoutes')
const hostRouter = require('./route/hostRoutes')
const { mongoConnect } = require('./utils/databaseUtil')

const app = express()

app.use(express.static(path.join(rootDir, 'public')))
app.use(express.urlencoded())

app.set('view engine', 'ejs');
app.set("views", "views")


// routes
app.use("/host", hostRouter)
app.use(storeRouter)


app.use(pageNotFound)

mongoConnect(() => {
  app.listen(3000, () => {
    console.log(`server runing on port: 3000`);
  })
})
