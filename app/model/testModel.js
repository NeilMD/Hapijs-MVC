'use strict';
var Mongoose = require('mongoose'),
    Boom = require('boom'),
    fs = require('fs'),
    // Promise = require('promise'),
    Schema = Mongoose.Schema;
// var gridfs = require('mongoose-gridfs');

// var gridfsSchema = require('mongoose-gridfs')({
//   collection:'attachments',
//   model:'pictures'
// });


//User
var actSchema = new Schema({
    // id: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String, required: true }],
    instruction: { type: String, required: true },
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