const fs = require('fs')
const path = require('path')

const rootDir = require("../utils/pathUtil")

const fileDataPath = path.join(rootDir, "data", "favourites.json")

class Favourite {

  static addFavourite(id, callBack) {
    Favourite.getFavourites((favourites) => {

      if (favourites.includes(id)) {
        callBack("Home is already exist in favourites")

      } else {
        favourites.push(id)
        fs.writeFile(fileDataPath, JSON.stringify(favourites), callBack)
      }
    })
  }

  static getFavourites(callBack) {
    fs.readFile(fileDataPath, (err, data) => {
      callBack(!err ? JSON.parse(data) : [])
    })
  }

  static removeFavourite (id, callBack){
    Favourite.getFavourites((favouriteHomes) => {
      favouriteHomes = favouriteHomes.filter(homeId => homeId !== id)
      
      fs.writeFile(fileDataPath, JSON.stringify(favouriteHomes), callBack)
    })
  }
}


module.exports = Favourite