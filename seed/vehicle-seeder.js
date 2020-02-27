const { Vehicle } = require('../model/vehicle')
const { Seat } = require('../model/seat')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/booking_busticket'
mongoose
  .connect(url)
  .then(() => console.log('connect successful'))
  .catch(err => console.log(err))
const seatCodes = [
  'A01',
  'A02',
  'A03',
  'A04',
  'A05',
  'A06',
  'A07',
  'A08',
  'A09',
  'A010',
  'A11',
  'A12',
  'B01',
  'B02',
  'B03',
  'B04',
  'B05',
  'B06',
  'B07',
  'B08',
  'B09',
  'B010',
  'B11',
  'B12'
]
const vehicles = [
  new Vehicle({
    busId: 'BUS_01',
    garageId: '5e5760b5f4c0fb395c735cdb',
    description: 'Xe giường nằm 24 chỗ',
    seats: [
      {
        code: 'A01',
        isBooked: false
      },
      {
        code: 'A02',
        isBooked: false
      }
    ]
  }),
  new Vehicle({
    busId: 'BUS_02',
    garageId: '5e5760b5f4c0fb395c735cde',
    description: 'Xe bus 24 chỗ',
    seats: [
      {
        code: 'A01',
        isBooked: false
      },
      {
        code: 'A02',
        isBooked: false
      }
    ]
  }),
  new Vehicle({
    busId: 'BUS_03',
    garageId: '5e5760b5f4c0fb395c735cdd',
    description: 'Xe vip 24 chỗ',
    seats: [
      {
        code: 'A01',
        isBooked: false
      },
      {
        code: 'A02',
        isBooked: false
      }
    ]
  })
]

var end = 0
for (let i = 0; i < vehicles.length; i++) {
  vehicles[i].save(function (err, result) {
    end++
    if (end === vehicles.length) {
      exit()
    }
  })
}
function exit () {
  mongoose.disconnect()
}
