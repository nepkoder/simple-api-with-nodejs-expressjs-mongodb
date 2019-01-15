const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setup schema
let contactSchema = new Schema({
	name: {
		type: String,
		// required: true
	},
	email: {
		type: String,
		// required: true
	},
	gender: String,
	phone: String,
	create_date: {
		type: Date,
		default: Date.now
	}
});

// export contact model
module.exports = mongoose.model('myCollection', contactSchema);