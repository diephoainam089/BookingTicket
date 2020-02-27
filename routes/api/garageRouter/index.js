var express = require('express');
const GarageController = require('./garageController')
var router = express.Router();

/* GET home page. */
router.get('/', GarageController.getGarage);
router.get('/detail/:id', GarageController.getGarageDetail);
router.get('/upload/:id', GarageController.goUploadPage);
router.post('/upload/:id', GarageController.addGarage);
router.put('/', )
router.delete('/', )
// router.post('/', GarageController.createGarage);
module.exports = router;
