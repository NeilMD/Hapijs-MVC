'use strict';
// const Path = require('path');
var Joi = require('joi'),
    Boom = require('boom'),
    act = require('../model/testModel').act,
    imgModel = require('../model/testModel').img,

    cheerio = require('cheerio'),
    fs = require('fs');


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
		// console.log(request.payload.data);

		var img = [];
		var type = [];
		var data = [];
		var ctr=0;;
		var $ = cheerio.load(request.payload.data);		
		$("img").each(function(i,elem){
			
			var str = $(this).attr("src");
			// console.log("NEIL: "+str);
			var col = str.indexOf(':');
			var semi = str.indexOf(';');
			var comma = str.indexOf(',');
		
			type[ctr] = str.substring(col+1,semi);
			data[ctr] = str.substring(comma+1);
			
			img[ctr] = data[ctr];
			
			$(this).attr("src","img.png");
			ctr++;

		});
		// var htmlObj = (html).getElementsByTagName("img").setAttribute("src","image.jpg");
		var buf = new Buffer(data[0], 'base64');

		imgModel.write({
			filename:'sample.png',
			contentType: type[0]
			},
			fs.readFile(data[0],'base64'),
			function(error, createdFile){
				console.log(createdFile);
				// console.log(createdFile);
			}
		);

		// console.log(data);
		// console.log(base_64_encode(type[0]));

		// reply()
	},




};