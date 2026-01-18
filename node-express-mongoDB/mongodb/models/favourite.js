const { ObjectId } = require('mongodb')
const {getDb} = require('../utils/databaseUtil')

class Favourite {

  static addFavourite(id) {    
    const db = getDb()
    return db.collection("favourites").insertOne({homeId: new ObjectId(String(id))})
  }

  static getFavourites() {
    const db = getDb()
    return db.collection("favourites").find().toArray()
  }

  static async deleteById(id) {        
    const db = getDb()   
    return db.collection("favourites").deleteOne({homeId: new ObjectId(String(id))})
  }
}


module.exports = Favourite