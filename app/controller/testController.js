'use strict';
// const Path = require('path');

module.exports =  {
	test:(request ,reply) =>{
		reply.view('tobeCalled',{
			'firstName': 'Neil',
			'lastName':'Capistrano'
		});
	}
};