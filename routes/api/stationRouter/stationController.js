var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getStation = (req, res, next) => {
  res.render('stations/stationList', { station: 'station' });
};

module.exports.getStationDetail = (req, res, next) => {
  res.render('stations/stationDetail', { station: 'station' });
};

module.exports.uploadStation = (req, res, next) => {
  res.render('stations/stationUpload', { station: 'station' });
};