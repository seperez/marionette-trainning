App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _){
    'use strict';

    Views.Search = Marionette.LayoutView.extend({
        // tagName: 'ul',
        // className: 'foo bar',

        template: App.Example.templates.search,

        ui: {
            'controls': '[data-js="controls"]',
            'results': '[data-js="results"]'
        },

        regions: {
            'controls': '@ui.controls',
            'results': '@ui.results'
        },

        onShow: function(){
            var controlsView = new Views.Controls();
            this.getRegion('controls').show(controlsView);

            var itemsCollection = new Example.Collections.Items();
            var resultsView = new Views.Results({
                collection: itemsCollection
            });

            show(resultsView);
        }
    });
});
