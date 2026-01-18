const { getDb } = require('../utils/databaseUtil')

class Favourite {

  static addFavourite(id) {
    const db = getDb()

    return db.collection("favourites").findOne({ homeId: id }).then(existFav => {
      if (!existFav) {
        return db.collection("favourites").insertOne({ homeId: id })
      }
      return Promise.resolve()
    })
  }

  static getFavourites() {
    const db = getDb()
    return db.collection("favourites").find().toArray()
  }

  static async deleteById(id) {
    const db = getDb()
    return db.collection("favourites").deleteOne({ homeId: id})
  }
}


module.exports = Favourite