const Trip = require('../models/Trip');

// getAllTrips is the data controller which calls the model
const getAllTrips = (req, res, next) => {
    // Trip get all is calling the model directly
    Trip.getAll((err, results) => {
        // 1. We assign the results to req.trips
        // 2. This allows us to access req.trips anywhere
        // within the middleware chain
        req.trips = results;
        console.log(req.trips)
        // The next function is called to trigger the next
        // middleware.
        next();
    })

}

module.exports = { getAllTrips };