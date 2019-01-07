// import express
import express from 'express';
// import body parser
import bodyParser from 'body-parser';
// import mongoose
import mongoose from 'mongoose';
// import routes
import apiContact from './contact/contact-routes';

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
    console.log(`Running Restful Api on ${PORT}`);
});