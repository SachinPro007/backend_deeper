const db = require('../utils/databaseUtil')

class Favourite {

  static addFavourite(id) {
    return Favourite.getFavourites().then(([favHomes]) => {
      if (!favHomes.includes(id)) {
        return db.execute("INSERT INTO favourites (homeId) VALUES (?)", [id])
      }else {
        return Promise((res) => res("Home already exist in favourites"))
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