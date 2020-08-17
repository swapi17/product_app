const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const productRoute = require('./routes/product');
// Load in the mongoose models
const {Product } = require('./db/models');



const PORT = process.env.PORT || 3000;

/* MIDDLEWARE  */

// Load middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});


/* END MIDDLEWARE  */

/* ROUTES */


app.use('/products', productRoute);



app.listen(PORT, () => {
    console.log('Server is listening on port 3000');
})