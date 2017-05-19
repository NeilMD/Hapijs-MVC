'use strict';
// const Path = require('path');
var Joi = require('joi'),
    Boom = require('boom'),
    act = require('../model/testModel').act;

module.exports =  {
	test:(request ,reply) =>{
		act.find({},function(err,user){
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
		act.find({},function(err, acts){
			if(err){
				console.log(err);

			}else{
				reply.view('searchMain',{
					'acts':acts
				});
			}
		})
		
	},
	create:(request, reply)=>{
		try{
			var acts = new act({
				title: request.payload.title,
				category:request.payload.cat,
				subject:request.payload.subject,
				question:request.payload.ques,
				answer:request.payload.ans
			});
		}catch(err){
			console.log(err);

			reply("Failed")
		}

		acts.save(function(err, act){
			if(err){
				console.log(err);
				reply("Failed!");
			}else{
				reply("Success");
			}
		});
	},
	upload:(request, reply)=>{
		reply.view('uploadMain');
	},
	auth:(request, reply) =>{
		request.yar.set('isAuth',true);
		reply("Success!");
	},
	checkauth:(request, reply)=>{
		reply("Pumasok!");
	},
	unauth:(request, reply) =>{
		request.yar.clear('isAuth');
		reply('Wla na ');
		
	},
	getData:(request, reply) =>{
		var html = request.payload.data;
		
		var htmlObj = document.createElement('div');
		htmlObj.innerHTML = html;
		var htmlObj = (html).getElementsByTagName("img").setAttribute("src","image.jpg");
		console.log(html);
		
	},



};