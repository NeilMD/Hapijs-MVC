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

function findUser(user,where){

}

module.exports = {
    user: user,

    find:function(where){    	
    	/**/
    	try{
    		return user.find("asdsad");
    	}catch(err){
    		return err;
    	}
    	// return 
		// Promise.all(function(user,where){
		// return  new Promise(function (resolve, reject) {
		// 	user.find(where, function(err, user) {
	 //            if (!err) {
	 //            	// console.log(user);
	 //            	resolve(user);

	 //            } else {
	 //                reject(err)
	 //            }
	 //        });
		// });		
		// }).then(function(value){
		// 	// console.log(value);  
  //       	return value;
        	
		// });
        
    }
};

