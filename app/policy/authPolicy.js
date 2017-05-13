'use strict';

module.exports = {
	checkAuth : function(request, reply){
		var auth = request.yar.get('isAuth');
		console.log(auth);
		if(request.yar.get('isAuth')){
			reply('asd');
		}
		else{
			reply("Unauthorized!").takeover();	
		}
		
	}
}