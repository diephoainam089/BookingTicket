const { Station } = require('../model/station')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/booking_busticket'
mongoose
  .connect(url)
  .then(() => console.log('connect successful'))
  .catch(err => console.log(err))
const station = [
  new Station({
    name: 'Văn phòng Nha Trang',
    address: '123',
    province: 'Nha Trang'
  }),
  new Station({
    name: 'Văn phòng Đà Lạt',
    address: '123',
    province: 'Đà Lạt'
  }),
  new Station({
    name: 'Văn phòng Sài Gòn',
    address: '123',
    province: 'TP. Hồ Chí Minh'
  })
]

var end = 0
for (let i = 0; i < station.length; i++) {
  station[i].save(function (err, result) {
    end++
    if (end === station.length) {
      exit()
    }
  })
}
function exit () {
  mongoose.disconnect()
}
