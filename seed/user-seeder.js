const { User } = require('../model/user')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/booking_busticket'
mongoose
  .connect(url)
  .then(() => console.log('connect successful'))
  .catch(err => console.log(err))
const newUser = new User({
  email: 'hoainam@gmail.com',
  password: '123',
  fullName: 'Diep Hoài Nam',
  phoneNum: '01233192939',
  address: '123/123',
  role: 'cus',
  birthday: 30/6/1998,
  orderList: []
})

newUser
  .save()
  .then(res => exit())
  .catch(err => console.log(err))

function exit () {
  mongoose.disconnect()
}
