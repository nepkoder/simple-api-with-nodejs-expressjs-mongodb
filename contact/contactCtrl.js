// import mongoose
import mongoose from 'mongoose';
// import contact model
import contactSchema from './model';

const Contact = mongoose.model('contact', contactSchema);

// Handle index actions (get all list)
exports.index = function (req,res) {
    Contact.find({}, (err,contact) => {
        if(err) { res.json(err)}
        res.json(contact);
    });
    // Contact.get(function(err,contact) {
    //     if (err) {
    //         res.json({
    //             status: "error",
    //             message: err,
    //         });
    //     }
    //     res.json({
    //         status: "success",
    //         message: "Contact retrieved successfully",
    //         data: contact
    //     });
    // });
};

// handle create contact actions
exports.new = function (req,res) {
    let contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    // save the contact and check for errors
    contact.save(function(err) {
        if(err) res.json(err);

        res.json({
            message: "New contact created !",
            data: contact // this above contact
        });
    });
};

// handle view contact  (get by single id)
exports.view = function (req,res) {
    Contact.findById(req.params.contact_id, function(err, contact) {
        if(err) res.send(err);
        res.json({
            message: "Contact details loading...",
            data: contact
        });
    });
};

// handle update contact info (update specific contact)
exports.update = function (req,res) {
    Contact.findById(req.params.contact_id, function (err,contact) {
        if(err) res.send(err);

        contact.name = req.body.name ? req.body.name:contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;


        //save the contact and check for errors
        contact.save(function (err) {
            if(err) res.json(err);
            res.json({
                message: "Contact info updated",
                data: contact
            });
        });
    });
};

// Handle delete contact (remove contact)
exports.delete = function (req,res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if(err) res.send(err);

        res.json({
            status: "success",
            message: "Contact deleted"
        });
    });
};