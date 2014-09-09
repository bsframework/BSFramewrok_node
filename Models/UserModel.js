var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
	UserGUID: String,
	UserName:String,
	UserNumber:String,
	UserBirthDay:String,
	UserPhone:String,
	UserMail:String
});

exports.User = mongoose.model('User',userSchema);