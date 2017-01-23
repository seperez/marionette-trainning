App.module('Example.Collections', function(Collections, App, Backbone, Marionette, $, _) {

    Collections.Items = Backbone.Collection.extend({
        'model': App.Example.Models.Item
    });
});
