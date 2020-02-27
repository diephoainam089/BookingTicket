var express = require('express')
var { Garage } = require('../../../model/garage')
var router = express.Router()

/* GET home page. */
module.exports.getGarage = async (req, res, next) => {
  await Garage.find()
    .then(garas => {
      res.render('garages/garageList', {
        data: garas,
        garage: 'garage'
      })
    })
    .catch(err => console.log(err))
}

module.exports.getGarageDetail = (req, res, next) => {
  const id = req.params.id
  Garage.findById(id)
    .then(gara => {
      res.render('garages/garageDetail', { data: gara, garage: 'garage' })
    })
    .catch(err => console.log(err))
}

module.exports.goUploadPage = (req, res, next) => {
  Garage.findById(req.params.id).then(gara => {
    res.render('garages/garageUpload', {
      data: gara,
      garage: 'garage',
      keyUpdate: req.params.id
    })
  })
}

module.exports.addGarage = (req, res, next) => {
  res.render('garages/garageList', { garage: 'garage' })
}
// module.exports.createGarage = (req, res, next) => {
//   res.render('garages/garageCreate', { garage: 'garage' });
// };
