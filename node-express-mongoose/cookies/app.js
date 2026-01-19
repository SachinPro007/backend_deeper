const express = require('express')
const path = require('path')
const rootDir = require('./utils/pathUtil')
const { pageNotFound } = require('./controllers/error')
const storeRouter = require('./route/storeRoutes')
const hostRouter = require('./route/hostRoutes')
const { default: mongoose } = require('mongoose')

const app = express()

app.use(express.static(path.join(rootDir, 'public')))
app.use(express.urlencoded())

app.set('view engine', 'ejs');
app.set("views", "views")


// routes
app.use("/host", hostRouter)
app.use(storeRouter)


app.use(pageNotFound)


const db_url = "mongodb+srv://root:root@prashantsir.a6optiz.mongodb.net/airbnb?appName=PrashantSir";
mongoose.connect(db_url).then(() => {
  console.log("MongoDb Connected");
  app.listen(3000, () => {
    console.log(`server runing on port: 3000`);
  })  
}).catch((err) => {
  console.log("Error while connecting to Mongodb", err);  
})
