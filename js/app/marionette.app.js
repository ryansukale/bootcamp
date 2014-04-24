var dependencies = ['marionette','backbone','jquery','underscore'];
var appModules = ['login'];
// This module is called app due to the fileName
require(
	// Load the main module
	['marionette.main'], 
	function () {
    require(
		dependencies.concat(appModules),
			function (Marionette,Backbone,$,_) {

				var App = new Backbone.Marionette.Application();
				App.on('initialize:before', function(options) {
					// Do something .e.g. you can add more data to your options
					console.log('App initialized:before');
					// Require the files that define the modules for your app
					var AppModules = ['login'];
					require('login')(App);
					//require(AppModules,function(login){
					//	login(App);
					//});

				});

				App.on('initialize:after', function(options) {
					// Do something else
					console.log('App initialized:after');

				});

				App.on("before:start", function(options){
				  // do stuff before the module is started
				  console.log('before:start');
				  //var AppModules = ['login'];
				  //require(AppModules,function(login){
				  //	login(App);
					//	//console.log(App.login);
					//});

				});

				App.on('start', function(options) {
					//if (Backbone.history){
				  //  Backbone.history.start(); // Ref:https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md
				  //}
				  // var AppModules = ['login'];
					// require(AppModules,function(){
					// 	//console.log(App.login);
					// });
				  console.log('App started');
				});

				// https://github.com/davidsulc/structuring-backbone-with-requirejs-and-marionette/blob/master/assets/js/app.js
				App.startSubApp = function(appName, args){
			    var currentApp = appName ? App.module(appName) : null;
			    if (App.currentApp === currentApp){ return; }

			    if (App.currentApp){
			      App.currentApp.stop();
			    }

			    App.currentApp = currentApp;
			    if(currentApp){
			      currentApp.start(args);
			    }
			  };

				// Start the app once the DOM is ready
				$(function(){
					// Require the files that define the modules for your app
					// var AppModules = ['login'];
					// require(AppModules,function(){
					// 	console.log(App.login);
					  App.start();

					// });
				});

				return App;

		  }
		);
});