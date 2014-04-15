//Add your own modules/plugins and prepend it to the common modules
require(
	//Wait for main module to load so that path 
	//config for requirejs is properly setup and any common modules in main have executed.
	//This ensures that all further require statements exeute relateive to the the
	//baseUrl config parameter setup in main.js
	['main'], 
	function () {
    require(
    //Common modules like Modernizr, JSON, bootstrap etc have already been loaded in main.
		['jquery','underscore','backbone','text!tmpl/sampleTmpl.txt'],
			function ($,_,Backbone,sampleTmpl) {
		    
		    //'tmpl' contains the text cotents of the file that you loaded.

				$(function(){

					//Begin your code here!

				});

		  }
		);
});