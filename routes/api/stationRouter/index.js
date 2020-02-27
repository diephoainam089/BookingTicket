var express = require('express');
const StationController = require('./stationController')
var router = express.Router();

/* GET home page. */
router.get('/', StationController.getStation);
router.get('/detail/:id', StationController.getStationDetail);
router.get('/upload/:id', StationController.uploadStation);
// router.post('/upload/:id', StationController.addStation);
module.exports = router;
