// import contact model
const contactModel = require('./model');

let contacts = {
	getAll: function (req,res) {
		contactModel.find({},(err,result) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: "+err,
					data: "",
				});
			} else {
				res.status(200).json({
					status: "Success",
					message: "All Contact Reterived",
					data: result
				});
			}
		});
	},

	getOneById: function (req,res) {
		contactModel.findById(req.params.id, (err,result) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: "+err,
					data: ""
				});
			} else {
				res.status(200).json({
					status: "Success",
					message: "One Contact Reterieved",
					data: result
				});
			}
		});
	},

	create: function (req,res) {
		let contact = new contactModel();
		contact.name = req.body.name;
		contact.gender = req.body.gender;
		contact.email =req.body.email;
		contact.phone=req.body.phone;

		contact.save( (err) => {
			if(err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: "+err
				});
			} else {
				res.status(200).json({
					status: "Success",
					message: "Data Successfully Inserted"
				});
			}
		});
	},

	update: function (req,res) {
		contactModel.findById(req.params.id, (err,result) => {
			if(err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: "+err
				});
			} else {
				res.status(200).json({
					status: "Success",
					message: "Data Successfully Deleted",
					data: result
				});
			}
		});
	}


};

// Handle index actions (get all list)
exports.index = function (req, res) {

	Contact.find(function (err, docs) {
		if (err) {
			res.status(500).json({
				status: "Error",
				message: "Database Error "+err,
				data: ""
			});
		} else {
			res.status(200).json({
				status: 'Success',
				message: "Success",
				data: docs
			});
		}
	});

	// Contact.find({}, (err,result) => {
	// 	if (err) {
	// 		res.json({
	// 			status: "Error",
	// 			message: err
	// 		});
	// 	}
	// 	res.json({
	// 		status: "Success",
	// 		message: "Data Retrived All",
	// 		data: result
	// 	});
	// });

	// another way
	// Contact.get(function (err, contact) {
	// 	if (err) {
	// 		res.json({
	// 			status: 'error',
	// 			message: err,
	// 		});
	// 	}
	// 	res.json({
	// 		status: 'success',
	// 		message: 'Contact retrieved successfully',
	// 		data: contact
	// 	});
	// });
};

// handle create contact actions
exports.new = function (req, res) {
	let contact = new Contact();
	contact.name = req.body.name ? req.body.name : contact.name;
	contact.gender = req.body.gender;
	contact.email = req.body.email;
	contact.phone = req.body.phone;

	// save the contact and check for errors
	contact.save(function (err) {
		if (err) res.json(err);

		res.json({
			message: 'New contact created !',
			data: contact // this above contact
		});
	});
};

// handle view contact  (get by single id)
exports.view = function (req, res) {
	Contact.findById(req.params.contact_id, function (err, contact) {
		if (err) res.send(err);
		res.json({
			message: 'Contact details loading...',
			data: contact
		});
	});
};

// handle update contact info (update specific contact)
exports.update = function (req, res) {
	Contact.findById(req.params.contact_id, function (err, contact) {
		if (err) res.send(err);

		contact.name = req.body.name ? req.body.name : contact.name;
		contact.gender = req.body.gender;
		contact.email = req.body.email;
		contact.phone = req.body.phone;

		//save the contact and check for errors
		contact.save(function (err) {
			if (err) res.json(err);
			res.json({
				message: 'Contact info updated',
				data: contact
			});
		});
	});
};

// Handle delete contact (remove contact)
exports.delete = function (req, res) {
	Contact.remove({
		_id: req.params.contact_id
	}, function (err) {
		if (err) res.send(err);

		res.json({
			status: 'success',
			message: 'Contact deleted'
		});
	});
};
