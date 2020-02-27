var express = require('express');
const TripController = require('./tripController')
var router = express.Router();

/* GET home page. */
router.get('/', TripController.getTrip);
router.get('/detail/:id', TripController.getTripDetail);
router.get('/upload/:id', TripController.uploadTrip);
module.exports = router;
