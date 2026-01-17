const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;


const mongo_Url = "mongodb+srv://root:root@prashantsir.a6optiz.mongodb.net/?appName=PrashantSir";

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect(mongo_Url)
    .then((client) => {
      console.log('Connected to MongoDB!');

      _db = client.db("airbnb")
      callBack();
    })
    .catch((err) => {
      console.log("Error while connecting to Mongo: ", err);
      throw err;
    });
};


const getDb = () => {
  if (!_db) {
    throw new Error("Database is not connected")
  }
  return _db
}

module.exports = { mongoConnect, getDb };