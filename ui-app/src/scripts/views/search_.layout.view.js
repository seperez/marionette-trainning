App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Search = Marionette.LayoutView.extend({
        template: App.Example.templates.search,
        initialize: function() {

        },
        regions: {
            'controls': '[data-js="controls"]',
            'results': '[data-js="results"]'
        },
        onShow: function() {
            var controlsView = new App.Example.Views.Controls();
            this.getRegion('controls').show(controlsView);
        }
    });
});
