const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtil')



class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl
  }

  save() {
    Home.fatchAll((homes) => {

      const filePath = path.join(rootDir, "data", "homes.json")
      homes.push(this)
  
      fs.writeFile(filePath, JSON.stringify(homes), (err) => {
        console.log(err);  
      })

    })

  }

  static fatchAll(callBack) {
    const filePath = path.join(rootDir, "data", "homes.json")
    fs.readFile(filePath, (err, data) => {
      callBack(!err ? JSON.parse(data) : [])
    })

  }
}

module.exports = Home