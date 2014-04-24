/* Pick a module definition template most convenient to your use case */



/* --- Basic template --- */
/* 6 arguments are passed by default. Learn more: http://goo.gl/UUO21l */
App.module("MyModule", function(MyModule, MyApp, Backbone, Marionette, $, _){

  // The context of the function is also the module itself
  this === MyModule; // => true

  // Private Data And Functions
  var myData = "this is private data";

  // Public Data And Functions
  this.someData = "public data";

  this.on("before:start", function(options){
    // do stuff before the module is started
  });

  this.on("start", function(options){
    // do stuff after the module has been started
  });

});

/* -------------------------- */




/* --- Module definition using object notation --- */
App.module("MyModule", {
  // startWithParent: false, /* Default value is true */
  initialize: function( options, moduleName, app ) {
    // console.log(options.someOption);
  },
  define: function( MyModule, MyApp, Backbone, Marionette, $, _ ) {
    
  },
  // someOption: 'initializationOption' /* See initialize function defined above */
});

/* -------------------------- */





/* --- Module defintion using classes --- */
var MyModuleClass = Marionette.Module.extend({
  startWithParent: false,

  constructor: function(moduleName, app, options) {
  },

  initialize: function(options, moduleName, app) {
  },

  onStart: function(options) {
  },

  onStop: function(options) {
  },
});

App.module("MyModule", MyModuleClass);

/* -------------------------- */