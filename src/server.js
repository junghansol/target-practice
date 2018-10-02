const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');
// create express app
const app = express();

// two types of request will be parseable
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({
        "message": "This is Gatling Practice target. Try hitting various endpoint targets for practices",
        "detail": "Endpoint urls are specified in README"
    });
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});