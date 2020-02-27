const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNum: { type: String, required: true },
  address: { type: String },
  role: { type: String, default: 'customer' },
  birthday: { type: Date },
  garageId: { type: mongoose.Schema.Types.ObjectId, ref: 'garage' },
})

const User = mongoose.model('User', UserSchema, 'users')

module.exports = { UserSchema, User }
