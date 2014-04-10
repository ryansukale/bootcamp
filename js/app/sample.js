//Add your own modules/plugins and prepend it to the common modules
require(
	['main'], //Wait for main module to load so that path config for requirejs is properly setup and any common modules in main have executed.
	function () {
    require(
		['jquery','underscore','backbone','json2','modernizr','bootstrap','jqueryUI'],
			function ($,_,Backbone) {
		    
				$(function(){

					//Begin your code here!

				});

		  }
		);
});