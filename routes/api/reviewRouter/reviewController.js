var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getReview = (req, res, next) => {
  res.render('trips/tripList', { trip: 'trip' });
};
module.exports.deleteReview = (req, res, next) => {
  res.render('trips/tripList', { trip: 'trip' });
};