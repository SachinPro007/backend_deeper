const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtil')

const fileDataPath = path.join(rootDir, "data", "homes.json")



class Home {
  constructor(id, houseName, price, location, rating, photoUrl) {
    this.id = id
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl
  }

  save() {
    
    Home.fetchAll((homes) => {  
      if(this.id) { // update home
        homes = homes.map(home => home.id === this.id ? this : home )

      } else{ // add new home
        this.id = Math.random().toString();        
        homes.push(this)    
      }  
      
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
  
  static delete (homeId, callBack) {
    Home.fetchAll((homes) => {
      homes = homes.filter(home => home.id !== homeId)
      fs.writeFile(fileDataPath, JSON.stringify(homes), callBack)
    })
  }  
}

module.exports = Home