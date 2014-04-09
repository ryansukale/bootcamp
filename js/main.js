//Uncomment lines to include libraries as needed

require.config({
    paths: {
        //localstorage: "lib/backbone.localStorage",
        modernizr: "lib/modernizr-2.7.1.min",
        bootstrap: "lib/bootstrap-3.1.1.min",
        jqueryUI: "lib/jquery-ui-1.10.0.custom.min",
        json2: "lib/json2",
        jquery: "lib/jquery-1.9.1.min",
        underscore: "lib/underscore.min",
        backbone: "lib/backbone.min",
        shim: {
        	'backbone': {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
	        },
	        'underscore': {
	            exports: '_'
	        }
        }
    }
});