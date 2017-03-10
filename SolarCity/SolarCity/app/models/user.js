// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required:true,index: {unique: true}},
    age: {type: Number, required:true},
    address: {type: String, required:true},
    interest: {type: Boolean, required:true},
    reason: {type: String, required:true}

});


module.exports = mongoose.model('User', UserSchema);