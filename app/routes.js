'use strict';

const testController = require('./controller/testController');
const path = require('path');

const checkAuth = function(request, reply){
	var auth = request.yar.get('isAuth');
	console.log(auth);
	if(request.yar.get('isAuth')){
		reply('asd');
	}
	else{
		reply("Unauthorized!").takeover();	
	}
	
}

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
				{method: checkAuth ,assign:'auth'}
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
	


