App.module('Example', function(Example, App, Backbone, Marionette, $, _){

    Example.onStart = function(){
        new App.Example.Router();
    }
});
