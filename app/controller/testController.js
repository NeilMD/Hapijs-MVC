'use strict';
// const Path = require('path');
var Joi = require('joi'),
    Boom = require('boom'),
    user = require('../model/testModel');

module.exports =  {
	test:(request ,reply) =>{
		var users = user.find({});
		console.log("users: "+users);
		
        reply.view('tobeCalled',{
			'firstName': 'Neil',
			'lastName':'Capistrano'
		});
		
	}
};