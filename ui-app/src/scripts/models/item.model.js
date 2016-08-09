App.module('Example.Models', function(Models, App, Backbone, Marionette, $, _){

    Models.Item = Backbone.Model.extend({

        idAttribute: 'itemId',

        defaults: {
            title: '',
            price: 0,
            quantity: 0
        }
    });
});
