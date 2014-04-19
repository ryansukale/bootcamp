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
