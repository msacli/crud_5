var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = Schema({
	name:String,
	address: String
});

module.exports = mongoose.model('contact', contactSchema);