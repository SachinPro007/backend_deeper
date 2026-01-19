const { Schema, model } = require("mongoose");

const favouriteSchema = Schema({
  homeId: { type: Schema.Types.ObjectId, ref: "Home", required: true, unique: true }
})

module.exports = model("Favourite", favouriteSchema)