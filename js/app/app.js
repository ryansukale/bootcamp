var dependencies = ['marionette','backbone','jquery','underscore'];
// This module is called app due to the fileName
require(
	// Load the main module
	['main'], 
	function () {
    require(
		dependencies,
			function (Marionette,Backbone,$,_) {

				var App = new Backbone.Marionette.Application();
				App.on('initialize:before', function(options) {
					// Do something .e.g. you can add more data to your options
				});

				App.on('initialize:after', function(options) {
					// Do something else
				});

				App.on('start', function(options) {
					if (Backbone.history){
				    Backbone.history.start(); // Ref:https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md
				  }
				});

				// Start the app once the DOM is ready
				$(function(){
					App.start();
				});

				return App;

		  }
		);
});