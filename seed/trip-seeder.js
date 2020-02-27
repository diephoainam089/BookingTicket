const { Trip } = require('../model/trip')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/booking_busticket'
mongoose
  .connect(url)
  .then(() => console.log('connect successful'))
  .catch(err => console.log(err))
const trips = [
  new Trip({
    fromStation: 'BUS_01',
    toStation: '5e5760b5f4c0fb395c735cdb',
    garageId: 'Xe giường nằm 24 chỗ',
    startDate: 12,
    startTime: 12,
    vehicleId:'5e5760b5f4c0fb395c735cdb',
    price:100000,
    review:[],
    totalProfit: 10
  })
]

var end = 0
for (let i = 0; i < trips.length; i++) {
  trips[i].save(function (err, result) {
    end++
    if (end === trips.length) {
      exit()
    }
  })
}
function exit () {
  mongoose.disconnect()
}
