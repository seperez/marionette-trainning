App.module('Example.Models', function(Models, App, Backbone, Marionette, $, _) {

    Models.Foo = Backbone.Model.extend({
        // 'urlRoot': '/',

        'defaults': {
            'foo': null
        },

        initialize: function() {
            // do something
        },

        methodCustom: function() {

        }
    });
});
