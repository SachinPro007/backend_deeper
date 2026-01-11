const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtil')

const fileDataPath = path.join(rootDir, "data", "homes.json")



class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((homes) => {      
      homes.push(this)
  
      fs.writeFile(fileDataPath, JSON.stringify(homes), (err) => {
        console.log(err);  
      })

    })
  }

  static fetchAll(callBack) {
    fs.readFile(fileDataPath, (err, data) => {
      callBack(!err ? JSON.parse(data) : [])
    })

  }

  static findById (homeId, callBack) {
    Home.fetchAll((homes) => {
      const matchedHome = homes.find(home => home.id === homeId)
      callBack(matchedHome)
    })
  }

  
}

module.exports = Home