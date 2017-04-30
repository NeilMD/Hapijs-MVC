var hapi = require('hapi'), 
	joi = require('joi'), 
	path = require('path'),
	nunjucksHapi = require('nunjucks-hapi');


var server = new hapi.Server();	

// nunjucks.configure(path.join(__dirname, './lib/view'));
server.connection({port:3000});

const routes = require('./lib/routes');
server.route(routes);

server.register(require('vision'),(err) =>{
	 if (err) {
        throw err;
    }
 
    server.views({
        engines: {
            html: nunjucksHapi
        },
        path: path.join(__dirname, './lib/view')
    });
});

// server.route({
// 	method: 'GET',
// 	path: '/{name*}',
// 	config:{
// 		// validate:{
// 		// 	params:{
// 		// 		name: joi.string().min(2).max(40).required()
// 		// 	}
// 		// },
// 		handler:function(req, reply){
// 			reply("Hello, "+req.params.name);
// 		}
// 	}
// });


server.start(function(){
	console.log("Now Visit: http://localhost:"+server.info.port+'/name');

});


// module.exports = server;