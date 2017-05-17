'use strict';

const testController = require('./controller/testController');
const path = require('path');
const authPolicy = require('./policy/authPolicy');



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
		method:'POST',
		path: '/getData',
		handler: testController.getData,
		config:{
			description: "getData"
		}
	},	
	{
		method:'POST',
		path: '/upload',
		handler: testController.create,
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


	// MIDDLEWARE SAMPLE
	{
		method:'GET',
		path: '/auth',		
		handler: testController.auth,
		config:{
			description: "Gives athentication",					
		}
	},
	{
		method:'GET',
		path: '/checkauth',		
		handler: testController.checkauth,
		config:{
			description: "Checks authentication",
			pre:[
				{method: authPolicy.checkAuth ,assign:'auth'}	
			],
			
		}
	},
	{
		method:'GET',
		path: '/unauth',	
		handler: testController.unauth,	
		config:{
			description: "Removes authentication",
			// pre:[
			// 	{method: checkAuth ,assign:'auth'}
			// ],
			
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
	


