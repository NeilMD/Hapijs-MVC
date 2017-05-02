'use strict';
var Mongoose = require('mongoose'),
    Boom = require('boom'),
    // Promise = require('promise'),
    Schema = Mongoose.Schema;

//User
var actSchema = new Schema({
    // id: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    subject: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true }

	});

var act = Mongoose.model('activity', actSchema);

module.exports = {
    act: act,
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