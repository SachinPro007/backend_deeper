const { default: mongoose } = require("mongoose");
const Favourite = require("./favourite");


const homeSchema = new mongoose.Schema({
  houseName: {type: String, required: true},
  price: {type: Number, required: true},
  location: {type: String, required: true},
  rating: {type: Number, required: true},
  description: String,
  photoUrl: String,
})

homeSchema.pre("deleteOne", async function() {
  const {_id} = this.getQuery()
  await Favourite.deleteOne({homeId: _id}) 
})

module.exports = mongoose.model("Home", homeSchema)