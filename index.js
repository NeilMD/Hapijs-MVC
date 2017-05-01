var hapi = require('hapi'), 
	joi = require('joi'), 
	path = require('path'),
	nunjucksHapi = require('nunjucks-hapi'),
    config = require('./config'),
    db = require('./database');


var server = new hapi.Server();	

// nunjucks.configure(path.join(__dirname, './lib/view'));
server.connection({port:3000});



server.register([require('vision'),require('inert')],(err) =>{
	 if (err) {
        throw err;
    }
 
    server.views({
        engines: {
            html: nunjucksHapi
        },
        path: path.join(__dirname, './app/view')
    });
});
//Mahalagang nandito bago lagay ng plugins

const routes = require('./app/routes');
server.route(routes);

server.start(function(){
	console.log("Now Visit: http://localhost:"+server.info.port+'/name');

});


// module.exports = server;