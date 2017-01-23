App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Search = Marionette.LayoutView.extend({
        template: App.Example.templates.search,

        ui: {
            'controls': '[data-js="controls"]',
            'results': '[data-js="results"]'
        },

        regions: {
            'controls': '@ui.controls',
            'results': '@ui.results'
        },

        onShow: function () {
            var items = new App.Example.Collections.Items();

            var controlsView = new Views.Controls({
                collection: items
            });
            this.getRegion('controls').show(controlsView);

            var itemsView = new Views.Items({
                collection: items
            });
            this.getRegion('results').show(itemsView);
        }

    });
});
