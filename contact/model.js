import mongoose from 'mongoose';
// setup schema
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// export econtact model
export default contactSchema;

// module.exports.get = function (callback, limit) {
//     Contact.find(callback).limit(limit);
// }