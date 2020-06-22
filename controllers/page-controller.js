const showHomepage = (req, res, next) => {
    // 1. The line below shows us how we can render pug with
    // the trips data being passed to the home.pug file
    // res.render('home', { trips: req.trips });

    // 2. Here we are sending the trips returned to the client
    // (Postman, React)
    res.json(req.trips)
}

// The two examples should be used seperately
// For React use example 2
// For pug use example 1

module.exports = { showHomepage };
