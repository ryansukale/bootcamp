define(['marionette.main'],function(){

	return function(App){
		/* Module definition code starts here */
		App.module("login", function(MyModule, App, Backbone, Marionette, $, _){

		  console.log('Inside login!');

		});
	}

	// return 'asd';

});
// (function (){
// 	console.log('re');
// 	return function(App){}
// })();

//require(
//	//Wait for main module to load so that path
//	['marionette-main'], 
//	function () {
//		// Any dependencies, plugins that your Marionette module might need
//		console.log('returning');
//		//return function(App){
//		}
//
//		var dependencies = [];
//    //require(dependencies,function () {
//
    //		console.log('returning');
    //		return function(App){
    //			/* Module definition code starts here */
		//			App.module("login", function(MyModule, App, Backbone, Marionette, $, _){
//
		//			  console.log('Inside login!');
//
		//			});
    //		}
//
		//  }
		//);
//});


// require(
// 	//Wait for main module to load so that path
// 	['marionette-main'], 
// 	function () {

// 		// Any dependencies, plugins that your Marionette module might need
// 		var dependencies = ['app'];
		
//     require(
//     	dependencies,
// 			function (App) {
// 				/* Module definition code starts here */
// 				App.module("login", function(MyModule, App, Backbone, Marionette, $, _){

// 				  console.log('Inside login!');

// 				});

// 		  }
// 		);
// });


//var dependencies = [
//	// Any dependencies, plugins that your Marionette module might need
//	'marionette-main',
//	'app'
//];
//
//define(dependencies,function () {
//
//		/* See http://goo.gl/m8ZuJS */
//		App = require('app');
//
//		/* Module definition code starts here */
//		App.module("Login", function(MyModule, App, Backbone, Marionette, $, _){
//
//		  console.log('Inside login!');
//
//		});
//
//});