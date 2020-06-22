const connection = require('../conf');

// We create a trip object which will be used
// to assign all of the models functions inside it.
const Trip = {};

// The Trip.getAll is a function of the Trip object
Trip.getAll = (callback) => {
    // We connect to the db and trigger a callback passing on the
    // err, results and fields to the callback function
    // this will occur when calling the model in our controller
    connection.query(
        'SELECT * FROM trip',
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )
}

// We export the trip object which in the end will contain all of the model functions
module.exports = Trip;