var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getTrip = (req, res, next) => {
  res.render('trips/tripList', { trip: 'trip' });
};

module.exports.getTripDetail = (req, res, next) => {
  res.render('trips/tripDetail', { trip: 'trip' });
};
module.exports.uploadTrip = (req, res, next) => {
  res.render('trips/tripUpload', { trip: 'trip' });
};