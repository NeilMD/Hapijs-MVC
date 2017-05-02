# Hapijs-MVC

MVC for desgin Hapijs

# Routing
Use app/routes.js to put routes.

Example:

filename:routes.js

```sh
{
		method:'GET',
		path: '/upload',
		handler: testController.upload,
		config:{
			description: "upload"
		}
}
```



Normal routing for Hapijs. This will used the upload function in testController. You can add validation using Joi.
Just remember to call the controller to use the methods.

# Controller

location: app/controller

Remember to call your model to be able to use it. for calling views, check the format of the example
Just add function in the module exports.

Example:

filename:testController.js

```sh
test:(request ,reply) =>{
		act.find({},function(err,user){
			if(err){
				console.log( err);
				// return;
			}
			console.log(user);
      // Calling views in view folder
			reply.view('tobeCalled',{
				'firstName': user[0].username,
				'lastName':'Capistrano'
			});

		}).catch(function(err){
			
		});
		
}
```


This is test method you can call it in your route like testController.test. Just copy the format and add your desired functions.

# Model

location: app/model

Just create your desired schema and add it your db then pass in module.exports to be able to use it.

Example:

Creating schema

```sh
var actSchema = new Schema({
    id: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    subject: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true }

});
```
Add

```sh
var act = Mongoose.model('activity', actSchema);
```
then put in module.exports
```sh
module.exports = {
    act: act,
};
```

# Views

read nunjuckjs api

# Settings

check config.js and database.js for settings of server and mongodb




