const express = require('express')
const router = express.Router()

router.use('/dashboard', require('./dashboardRouter') )
router.use('/garages', require('./garageRouter') )
router.use('/trips', require('./tripRouter') )
router.use('/vehicles', require('./vehicleRouter') )
router.use('/stations', require('./stationRouter') )
router.use('/users', require('./userRouter') )
router.use('/orders', require('./orderRouter') )
module.exports = router