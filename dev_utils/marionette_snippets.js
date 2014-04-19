/*
	Note the naming convention. Capitalized object names for the views
*/

// Marionettejs uses a composite module architecture
// i.e. you use modules to structure your code.

var SampleItemView = new Backbone.Marionette.ItemView.extend({
	template:'selector'
});

var NoSampleItemView = new Backbone.Marionette.ItemView.extend({
	template:'selector'
});

var SampleCollView = new Backbone.Marionette.Collection.extend({
	itemView:SampleItemView,
	emptyView: NoSampleItemView
});

var MyApp = new Backbone.Marionette.Application();

// Define the regions in your application
MyApp.addRegions({
	regionName1:'selector',
	regionName2:'selector'
});

// Creating predefined regions
var NamedRegion = new Backbone.Marionette.Region({
	el: "selector" // Unlike views, over here you are using the 'el' property
});

region.show(new SampleItemView());

var SomeModule = function(o){
	// Constructor for someModule
};

// This seems equivalent to a constructor for the MyApp
MyApp.addInitializer(function(options){
	App.someModule = new SomeModule(options);
});

MyApp.on('initialize:before', function(options) {
	// Do something .e.g. you can add more data to your options
});

MyApp.on('initialize:after', function(options) {
	// Do something else
});

MyApp.on('start', function(options) {
	if (Backbone.history){
    Backbone.history.start(); // Ref:https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md
  }
});


var myModule = App.module(‘myModule’);

App.module("myModule", function(){
    // Create Your Module
});

App.module("myModule", function(myModule, App, Backbone, Marionette, $, _, customArg1, customArg2){
    // Private Data And Functions
    var privateData = "this is private data";

    // Set to false if you want to manually initialize this module
    // else this module will start when the parent module starts
    // myModule.startWithParent = false;

    var UsefulClass = function() {
    	// ...
    };

    myModule.addInitializer(function() {
        myModule.useful = new UsefulClass();
        // More setup
    });

    myModule.addFinalizer(function() {
        myModule.useful = null;
        // More tear down
    });

    var privateFunction = function(){
        console.log(privateData);
    }

    // Public Data And Functions
    this.someData = "public data";

    this.someFunction = function(){
        privateFunction();
        console.log(this.someData);
    }
}, customArg1, customArg2);

// Modules can be started and stopped, just like the application


myModule.on('before:start', function(options) {
	// Do something .e.g. you can add more data to your options
});

myModule.on('before:stop', function(options) {
	// Do something else
});

// A good strategy would be to use regions on the app, and then inside each
// region, use a layout. A layout extends views so it can be used anywhere
// that you can use a view. The cool thing is that a layout can in itself contain
// regions thereby enabling you to nest layouts within layouts.
MyLayout = Backbone.Marionette.Layout.extend({
  template: "#layout-template",
 
  regions: {
    myRegion: "#some-div",
    anotherRegion: ".another-element"
  }
});

// However, the regions in the layout dont refer to anything
// on the DOM until the layout has been rendered using show
var myLayout = new MyLayout();
MyApp.someRegion.show(myLayout);

// Once you've rendered the layout, you now have direct access to all of the specified regions as region managers.
layout.myRegion.show(new MenuView());
layout.anotherRegion.show(new SubLayout()); // Note how you can show a sublayout in layout