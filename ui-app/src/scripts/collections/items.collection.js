App.module('Example.Collections', function(Collections, App, Backbone, Marionette, $, _){

    Collections.Items = Backbone.Collection.extend({
        // url: function(){
        //     return 'https://api.mercadolibre.com/sites/' + App.Config.siteId + '/search';
        // },

        'url': 'https://api.mercadolibre.com/sites/MLA/search',

        'model': App.Example.Models.Item,

        parse: function(response){
            return response.results;
        }
    });
});
