App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Controls = Marionette.ItemView.extend({
        template: App.Example.templates.controls,

        ui: {
            'query': '[data-js="query"]',
            'search': '[data-js="search"]'
        },

        events: {
            'click @ui.search': 'search'
        },

        search: function(event){
            event.preventDefault();
            alert('buscando: ' + this.ui.query.val());
        }

    });
});
