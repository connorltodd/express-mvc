const express = require('express');
const router = express.Router();

// This middleware is responsible for returning all the trips data.
const { getAllTrips } = require('../controllers/trips-controller');

// This middleware is responsible for sending the data back to the client.
const { showHomepage } = require('../controllers/page-controller');

router.get('/', getAllTrips, showHomepage);

module.exports = router;