// core module
const path = require('path')


// external modules
const express = require('express')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

// local module
const rootDir = require('./utils/pathUtil')
const { pageNotFound } = require('./controllers/error')
const storeRouter = require('./route/storeRoutes')
const hostRouter = require('./route/hostRoutes')
const { default: mongoose } = require('mongoose')
const authRouter = require('./route/authRoutes')

const app = express()


// ejs setup
app.set('view engine', 'ejs');
app.set("views", "views")


// middlewares
app.use(express.static(path.join(rootDir, 'public')))
app.use(express.urlencoded())


// create session or store mongoDB
const db_url = "mongodb+srv://root:root@prashantsir.a6optiz.mongodb.net/airbnb?appName=PrashantSir";

const store = new MongoDBStore({
  uri: db_url,
  collection: "sessions"
})


app.use(session({
  secret: "here is my strong secret key",
  resave: false,
  saveUninitialized: true,
  store: store
}))



// routes
app.use(authRouter)
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn || false;
  req.isLoggedIn ? next() : res.redirect("/login");
})
app.use("/host", hostRouter)
app.use(storeRouter)

// 404 page
app.use(pageNotFound)


// connect mongoose and run server
const PORT = 3000;
mongoose.connect(db_url).then(() => {
  console.log("MongoDb Connected");
  app.listen(PORT, () => {
    console.log(`server runing on port: ${PORT}`);
  })
}).catch((err) => {
  console.log("Error while connecting to Mongodb", err);
})
