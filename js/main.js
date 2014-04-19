//Uncomment lines to include libraries as needed
require.config({
  paths : {
    //localstorage: "lib/backbone.localStorage",
    json2: "lib/json2",
    modernizr: "lib/modernizr-2.7.1.min",
    bootstrap: "lib/bootstrap-3.1.1.min",
    jquery: "lib/jquery-1.9.1.min",
    jqueryUI: "lib/jquery-ui-1.10.0.custom.min",
    underscore: "lib/underscore.min",
    text: "plugins/text",
    backbone: "lib/backbone.min",
    marionette: "lib/backbone.marionette.min" 
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'jqueryUI': {
      deps: ['jquery']
    },
    'backbone': {
      //These script dependencies should be loaded before loading backbone.js
      deps: ['underscore', 'jquery'],
      //Once loaded, use the global 'Backbone' as the module value.
      exports: 'Backbone'
    },
    marionette : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'Marionette'
    }
  }
});

//Load modules that are common to all of your pages
//Run scripts that have common functionality across all pages here.
//TODO: This will probably need to be optimized based on these blogs, but this should do for now.
//http://robdodson.me/blog/2012/11/18/a-require-dot-js-multipage-shimmed-site-how-to/
//http://simonsmith.io/modular-html-components-with-requirejs/
require(
  ['jquery','underscore','backbone','marionette','json2','modernizr','bootstrap','jqueryUI']
  ,
  function($,_,Backbone,Marionette) {
    $(function(){
      //Add functionality common to all pages here.
    });
  }
);