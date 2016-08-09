App.module('Example.Collections', function(Collections, App, Backbone, Marionette, $, _){
    'use strict';

    Collections.Items = Backbone.Collection.extend({
        url: function(){
            var siteId = 'MLA';
            return 'https://api.mercadolibre.com/sites/' + siteId + '/search';
        },

        'model': App.Example.Models.Item,

        parse: function(response){
            return response.results;
        }
    });
});
