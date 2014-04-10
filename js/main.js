//Uncomment lines to include libraries as needed

var params = {
    paths: {
        //localstorage: "lib/backbone.localStorage",
        json2: "lib/json2",
        modernizr: "lib/modernizr-2.7.1.min",
        bootstrap: "lib/bootstrap-3.1.1.min",
        jquery: "lib/jquery-1.9.1.min",
        jqueryUI: "lib/jquery-ui-1.10.0.custom.min",
        underscore: "lib/underscore.min",
        backbone: "lib/backbone.min"
    },
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
};

require.config(params);
