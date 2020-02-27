var express = require('express');
const VehicleController = require('./vehicleController')
var router = express.Router();

/* GET home page. */
router.get('/', VehicleController.getVehicle);
router.get('/detail/:id', VehicleController.getVehicleDetail);
router.get('/upload/:id', VehicleController.uploadVehicle);
module.exports = router;
