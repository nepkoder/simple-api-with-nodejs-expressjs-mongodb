// import contact model
const contactModel = require('../model/contact');

let contacts = {
	getAll: function (req, res) {
		contactModel.find({}, (err, result) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: " + err,
					data: "",
				});
			} else {
				console.log(result);
				res.status(200).json({
					status: "Success",
					message: "All Contact Reterived",
					data: result
				});
			}
		});
	},

	getOneById: function (req, res) {
		contactModel.findById(req.params.id, (err, result) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: " + err,
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

	create: function (req, res) {
		let contact = new contactModel();
		contact.name = req.body.name;
		contact.gender = req.body.gender;
		contact.email = req.body.email;
		contact.phone = req.body.phone;

		contact.save((err) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: " + err
				});
			} else {
				res.status(200).json({
					status: "Success",
					message: "Data Successfully Inserted"
				});
			}
		});
	},

	update: function (req, res) {
		contactModel.findById(req.params.id, (err, result) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: " + err,
					data: ""
				});
			}

			result.name = req.body.name;
			result.gender = req.body.gender;
			result.email = req.body.email;
			result.phone = req.body.phone;

			// save the result
			result.save((err) => {
				if (err) {
					res.status(500).json({
						status: "Error",
						message: "Database Error: " + err
					});
				} else {
					res.status(200).json({
						status: "Success",
						message: "Successfully updated."
					});
				}
			});
		});
	},

	delete: function (req, res) {
		contactModel.remove({
			_id: req.params.id
		}, (err) => {
			if (err) {
				res.status(500).json({
					status: "Error",
					message: "Database Error: " + err
				});
			} else {
				res.status(200).json({
					status: "Success",
					message: "Successfully Deleted"
				});
			}
		});
	}

};

module.exports = contacts;