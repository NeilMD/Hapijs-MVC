'use strict';
// const Path = require('path');
var Joi = require('joi'),
    Boom = require('boom'),
    act = require('../model/testModel').act,
    imgModel = require('../model/testModel').img,
    generateID = require("unique-id-generator"),
    cheerio = require('cheerio'),
    fs = require('fs');
// Save to server and change src of img
function src(request, html){
	var img = [];
	var type = [];
	var data = [];
	var ctr=0;

	var $ = cheerio.load(html);		
	// console.log(html);
	$("img").each(function(i,elem){
		
		var str = $(this).attr("src");
		// console.log("NEIL: "+str);
		var col = str.indexOf(':');
		var semi = str.indexOf(';');
		var comma = str.indexOf(',');
		
		type[ctr] = str.substring(col+1,semi);
		var dataType = str.substring(str.indexOf("/")+1,semi);
		data[ctr] = str.substring(comma+1);
		
		img[ctr] = data[ctr];
		
		//TEMP. Should be stored in a folder for that account.
		var accID = request.yar.get("auth");
		var tempLoc = './public/img/' + accID;
		if(!fs.existsSync(tempLoc)){
			var as = fs.mkdir(tempLoc);
		}

		var location = tempLoc+'/' + generateID({prefix:"id-"+accID}) + '.'+ dataType;
		var content = fs.writeFile(location, img[ctr] ,'base64');
		$(this).attr("src",location);
		// console.log(img[ctr]);
		
		ctr++;

	});
	console.log($.html());
	return $.html();
}

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
		request.yar.set('auth',"029839023480239480");
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
		var data = request.payload;

		var title = data["title"];
		var area = data["area"];
		var tags = data["tags[]"];
		var ans = src(request , data["ans"]);
		var ins = src(request ,data["ins"]);
		var ques = src(request ,data["ques"]);
		try{
			var acts = new act({
				title: title,
				category:area,
				tags:tags,
				instruction:ins,
				question:ques,
				answer:ans
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
		
		// reply()
	},




};