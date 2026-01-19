const { Schema, model } = require("mongoose");

const favouriteSchema = Schema({
  homeId: { type: String, required: true, unique: true }
})

module.exports = model("Favourite", favouriteSchema)