// import express
const express = require('express');
// import body parser
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');
// import routes
const apiContact = require('./contact/contact-routes');

// initialize the app
const app = express();
// setup server port
const PORT = process.env.PORT || 5000;

// configure bodyparser to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiContact);

// connect to mongoose and set connection variable
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restful-api');
// const db = mongoose.connection;

// Launch app the listen to specified port
app.listen(PORT, () => {
	// console.log(`Running Restful Api on ${PORT}`);
});
