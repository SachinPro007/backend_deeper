const { getDb } = require('../utils/databaseUtil')



class Home {
  constructor(houseName, description, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.description = description;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl
  }

  save() {
    const db = getDb()
    return db.collection("homes").insertOne(this)
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes")
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id = ?", [homeId])
  }

  static async deleteById(homeId) {
    await db.execute("DELETE FROM favourites WHERE homeId = ?;", [homeId])
    return db.execute("DELETE FROM homes WHERE id = ?;", [homeId])
  }
}

module.exports = Home