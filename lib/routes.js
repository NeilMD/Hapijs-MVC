'use strict';

const testController = require('./controller/testController');

module.exports = [
	{
		method:'GET',
		path: '/',
		handler: testController.test,
		config:{
			description: "Home"
		}
	},
	// {
	// 	method:'GET',
	// 	path: '/testViews',
	// 	handler: testController.test,
	// 	config:{
	// 		description: "Shows Username"
	// 	}
	// }
];

