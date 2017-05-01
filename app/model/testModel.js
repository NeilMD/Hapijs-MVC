'use strict';
var Mongoose = require('mongoose'),
    Boom = require('boom'),
    // Promise = require('promise'),
    Schema = Mongoose.Schema;

//User
var UserSchema = new Schema({
    userId: { type: String, unique: true, required: true },
    username: { type: String, required: true }
	});

var user = Mongoose.model('user', UserSchema);

module.exports = {
    user: user,
    // find:function(where){    	    	
    // 	try{
    // 		return user.find(where);
    // 	}catch(err){
    // 		return err;
    // 	}        
    // }
};


/*Promise.all([
	new Promise(function(resolve, reject){
		user.find(where,function(err,user){
			if(err){
				reject(err)
				// return;
			}
			resolve(user);
		});
	})
]).then(function(user){
	console.log("Model user:"+user);
	// return user;
	return user;
	
});
*/