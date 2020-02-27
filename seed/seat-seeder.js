const { Seat } = require('../model/seat')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/booking_busticket'
mongoose
  .connect(url)
  .then(() => console.log('connect successful'))
  .catch(err => console.log(err))
const seats = [
  new Seat({
    seat: {
        code: 'A01',
        isBooked: false
    }
  }),
  new Seat({
    seat: {
        code: 'A01',
        isBooked: false
    }
  }),
  new Seat({
    seat: {
        code: 'A01',
        isBooked: false
    }
  }),
    new Seat({
    seat: {
        code: 'A01',
        isBooked: false
    }
  })
]

var end = 0
for (let i = 0; i < seats.length; i++) {
  seats[i].save(function (err, result) {
    end++
    if (end === seats.length) {
      exit()
    }
  })
}
function exit () {
  mongoose.disconnect()
}
