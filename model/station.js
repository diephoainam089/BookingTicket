const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  province: { type: String, require: true }
})

const Station = mongoose.model('Station', StationSchema, 'stations')

module.exports = {
  StationSchema,
  Station
}
