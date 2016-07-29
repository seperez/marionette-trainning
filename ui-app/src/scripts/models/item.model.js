App.module('Example.Models', function(Models, App, Backbone, Marionette, $, _) {

    Models.Item = Backbone.Model.extend({
        // 'urlRoot': '/',
        // 'idAttribute': 'itemId',

        'defaults': {
            'title': null,
            'price': 'A convenir',
            'quantity': 1
        },

        initialize: function() {
            // do something
        },

        methodCustom: function() {

        }
    });
});
