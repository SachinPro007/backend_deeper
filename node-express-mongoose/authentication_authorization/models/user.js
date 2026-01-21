const {Schema, model} = require('mongoose')


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['guest', 'host'],
    default: 'guest'
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = model("User", userSchema)