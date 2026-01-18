const { ObjectId } = require('mongodb');
const { getDb } = require('../utils/databaseUtil');
const Favourite = require('./favourite');



class Home {
  constructor(houseName, description, price, location, rating, photoUrl, _id) {
    this.houseName = houseName;
    this.description = description;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl
    if(_id){
      this._id = _id
    }
  }

  save() {
    const db = getDb()    
    if(!this._id){
      return db.collection("homes").insertOne(this)      
    }else{
      const updatedHome = {
        houseName: this.houseName,
        description: this.description,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoUrl: this.photoUrl,
      }
      return db.collection("homes").updateOne({_id: new ObjectId(String(this._id))}, {$set: updatedHome})
    }
  }

  static fetchAll() {
    const db = getDb()
    return db.collection("homes").find().toArray()
  }

  static async findById(homeId) {
    const db = getDb()
    return db.collection("homes").find({_id: new ObjectId(String(homeId))}).next()
  }

  static async deleteById(homeId) {
    const db = getDb()
    await Favourite.deleteById(homeId)
    return db.collection("homes").deleteOne({_id: new ObjectId(String(homeId))})
  }
}

module.exports = Home