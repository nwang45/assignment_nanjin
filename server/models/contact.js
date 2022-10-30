//connect to mongoose
let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactModel);