'use strict';

const testController = require('./controller/testController');
const path = require('path');

module.exports = [
	{
		method:'GET',
		path: '/upload',
		handler: testController.upload,
		config:{
			description: "upload"
		}
	},
	{
		method:'GET',
		path: '/search',
		handler: testController.search,
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
	


