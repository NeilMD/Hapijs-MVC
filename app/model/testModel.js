'use strict';
var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

//User
var UserSchema = new Schema({
    userId: { type: String, unique: true, required: true },
    username: { type: String, required: true }
	});

var user = Mongoose.model('user', UserSchema);

module.exports = {
    user: user
};
