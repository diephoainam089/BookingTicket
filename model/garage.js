const mongoose = require('mongoose')

const GarageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  imagePath: {type: String, contentType: String},
  description: String,
})

const Garage = mongoose.model('Garage',GarageSchema,'garages')

module.exports = {
    GarageSchema, Garage
}