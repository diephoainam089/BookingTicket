var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports.getVehicle = (req, res, next) => {
  res.render('vehicles/vehicleList', { vehicle: 'vehicle' });
};

module.exports.getVehicleDetail = (req, res, next) => {
  res.render('vehicles/vehicleDetail', { vehicle: 'vehicle' });
};
module.exports.uploadVehicle = (req, res, next) => {
  res.render('vehicles/vehicleUpload', { vehicle: 'vehicle' });
};