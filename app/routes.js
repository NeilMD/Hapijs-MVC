'use strict';

const testController = require('./controller/testController');
const path = require('path');

module.exports = [
	{
		method:'GET',
		path: '/',
		handler: testController.test,
		config:{
			description: "Home"
		}
	},

	//PARA SA STATIC FILES
	{
	    method: 'GET',
	    path: '/{param*}',
	    handler: {
	        directory: {
			    path: path.join(__dirname, '../public/styles')
			}
	    }
	}
];
	


