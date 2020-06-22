const express = require('express');
const app = express();
const router = require('./routes/index');

// view engine setup
app.set('views', './views');
app.set('view engine', 'pug');

// importing the router which is built within './routes/index'
app.use('/', router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
