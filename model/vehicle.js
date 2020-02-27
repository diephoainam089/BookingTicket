const mongoose = require('mongoose')
const { SeatSchema } = require('./seat')

const VehicleSchema = new mongoose.Schema({
  busId: { type: String, require: true },
  garageId: { type: mongoose.Schema.Types.ObjectId, ref: 'garage' },
  description: String,
  seats: [SeatSchema]
})

const Vehicle = mongoose.model('Vehicle', VehicleSchema, 'vehicles')

module.exports = {
  VehicleSchema,
  Vehicle
}