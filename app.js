// import express.. packages
const express = require('express');
// import body parser
const bodyParser = require('body-parser');
// import mongoose
const mongoose = require('mongoose');

// import routes
const apiContact = require('./routes/contact');

// file includes
const config = require('./config/config');

/* Start APP initialization */
// initialize the app
const app = express();
let db;
// setup server port
const PORT = process.env.PORT || 5000;

// configure bodyparser to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//makeing uploads folder as static
app.use(express.static('./uploads'));

//  set headers for Cross Origin
app.all('/*', (req,res,next) => {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers",'Content-type,Accept,X-Access-Token,X-Key');
	if(req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

// using routes
app.use('/', apiContact);

// if no route is matched by now, it must be a 404
app.use( (req,res,next) => {
	res.status(404).json({
		status: "Page Not Found"
	}).end();
});

// connect to mongoose and set connection variable
mongoose.connect(config.mongo.url, (err,database) => {
	if(err) {
		console.log(err);
		process.exit(1);
	}
	// save database object from callback for reuse.
	db = database;
	console.log("Database Connection Ready");
});

// Launch app the listen to specified port
app.listen(PORT, () => {
	console.log(`Running Restful Api on ${PORT}`);
});
