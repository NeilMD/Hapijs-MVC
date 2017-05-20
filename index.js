var hapi = require('hapi'), 
	joi = require('joi'), 
	path = require('path'),
	nunjucksHapi = require('nunjucks-hapi'),
    config = require('./config'),
    db = require('./database');


var server = new hapi.Server();	

var options = {
    storeBlank: false,
    cookieOptions: {
        password: 'the-password-must-be-at-least-32-characters-long',
        isSecure: false
    }
};

// nunjucks.configure(path.join(__dirname, './lib/view'));
server.connection({port:3000});



server.register([
        require('vision'),
        require('inert'),
        
        // require('cheerio'),
        {register: require('yar'), options},
        // {
        //     register: require('hapi-server-session'),
        //     options: {
        //         cookie: {
        //           isSecure: false,
        //         },
        //     },
        // }
  

    ],(err) =>{
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


const routes = require('./app/routes');
server.route(routes);

server.start(function(){
	console.log("Now Visit: http://localhost:"+server.info.port+'/name');

});


// module.exports = server;