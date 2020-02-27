const { Garage } = require('../model/garage')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/booking_busticket'
mongoose
  .connect(url)
  .then(() => console.log('connect successful'))
  .catch(err => console.log(err))
const garage = [
  new Garage({
    name: 'Phương Trang',
    address: '123',
    phone: '0908456546',
    imagePath: 'abcd',
    description: 'Chạy 24/24'
  }),
  new Garage({
    name: 'Hoa Mai',
    address: '123',
    phone: '0908456546',
    imagePath: 'abcd',
    description: 'Chạy 24/24'
  }),
  new Garage({
    name: 'Thành Bưởi',
    address: '123',
    phone: '0908456546',
    imagePath: 'abcd',
    description: 'Chạy 24/24'
  }),
  new Garage({
    name: 'Phú Thọ',
    address: '123',
    phone: '0908456546',
    imagePath: 'abcd',
    description: 'Chạy 24/24'
  })
]

var end = 0
for (let i = 0; i < garage.length; i++) {
  garage[i].save(function (err, result) {
    end++
    if (end === garage.length) {
      exit()
    }
  })
}
function exit () {
  mongoose.disconnect()
}
