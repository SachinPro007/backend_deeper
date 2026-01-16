const db = require('../utils/databaseUtil')

class Favourite {

  static addFavourite(id) {
    Favourite.getFavourites().then(async ([favHomes]) => {
      if (!favHomes.includes(id)) {
        return await db.execute("INSERT INTO favourites (homeId) VALUES (?)", [id])
      }
    })
  }

  static getFavourites() {
    return db.execute("SELECT * FROM favourites;")
  }

  static async deleteById(id) {       
    return db.execute("DELETE FROM favourites WHERE homeId = ?;", [id])
  }
}


module.exports = Favourite