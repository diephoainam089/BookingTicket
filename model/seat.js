const mongoose = require('mongoose')

const SeatSchema = new mongoose.Schema({
  seat: {
    code: { type: String, required: true },
    isBooked: { type: Boolean, default: false }
  }
})

const Seat = mongoose.model('Seat', SeatSchema, 'seats')

module.exports = {
  SeatSchema,
  Seat
}