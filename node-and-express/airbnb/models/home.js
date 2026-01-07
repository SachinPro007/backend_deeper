const fs = require('fs')
const path = require('path')
const roorDir = require('../utils/pathUtil')


// let homes = []

class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl

  }

  save() {
    Home.fetchAll(homes => {
      const filePath = path.join(roorDir, "data", "homes.json")
      // const updatedHomes = [...homes, this]
      homes.push(this)
      fs.writeFile(filePath, JSON.stringify(homes), (err) => {
        console.log(err);
      })

    })
  }

  static fetchAll(callBack) {
    const filePath = path.join(roorDir, "data", "homes.json")
    fs.readFile(filePath, (err, data) => {
      callBack(!err ? JSON.parse(data) : [])
    })

  }
}

module.exports = Home