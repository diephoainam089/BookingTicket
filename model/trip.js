const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({
  fromStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'station'
  },
  toStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'station'
  },
  garageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'garage'
  },
  startDate: {
    type: Date,
    require: true
  },
  startTime: {
    type: String,
    require: true
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vehicle'
  },
  price: {
    type: Number,
    require: true
  },
  review: [{ type: mongoose.Schema.Types.ObjectId, ref: 'review' }],
  totalProfit: { type: Number, default: 0 }
})

const Trip = mongoose.model('Trip', TripSchema, 'trips')

module.exports = {
  TripSchema,
  Trip
}
