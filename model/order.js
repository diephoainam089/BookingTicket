const mongoose = require('mongoose')
const {SeatSchema} = require('./seat')
const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref:"user" },
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: "trip" }
  date: { type: Date, required: true },
  seats: [SeatSchema],
  totalPrice: {type: String, require: true},
  status: {type: String, default: "Pending"}
})

const Order = mongoose.model('Order', OrderSchema, 'orders')

module.exports = {
  OrderSchema,
  Order
}