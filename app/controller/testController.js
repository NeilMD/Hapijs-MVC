'use strict';
// const Path = require('path');
var Joi = require('joi'),
    Boom = require('boom'),
    user = require('../model/testModel').user;

module.exports =  {
	test:(request ,reply) =>{
		user.find({},function(err,user){
			if(err){
				console.log( err);
				// return;
			}
			console.log(user);
			reply.view('tobeCalled',{
				'firstName': user[0].username,
				'lastName':'Capistrano'
			});

		}).catch(function(err){
			
		});
		// var users = user.user.find({});
		// console.log(users);
		
  		// reply.view('tobeCalled',{
		// 	'firstName': 'Neil',
		// 	'lastName':'Capistrano'
		// });
		
	},
	search:(request, reply)=>{
		reply.view('searchMain');
	},
	upload:(request, reply)=>{
		reply.view('uploadMain');
	}
};