'use strict';
// const Path = require('path');
var Joi = require('joi'),
    Boom = require('boom'),
    user = require('../model/testModel');

module.exports =  {
	test:(request ,reply) =>{
		user.user.find({}, function(err, user) {
            if (!err) {
            	console.log(user);
                reply.view('tobeCalled',{
					'firstName': 'Neil',
					'lastName':'Capistrano'
				});
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
		
	}
};