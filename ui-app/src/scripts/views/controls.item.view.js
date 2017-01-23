App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Controls = Marionette.ItemView.extend({
        template: App.Example.templates.controls,

        ui: {
            'query': '[data-js="query"]',
            'search': '[data-js="search"]'
        },

        events: {
            'click @ui.search': 'handleSearch',
            'input @ui.query': 'handleSearch',
        },

        handleSearch: function(event){
            event.preventDefault();
            this.search();
        },

        search: function(){
            var query = this.ui.query.val();

            var p = this.collection.fetch({
                data: {
                    q: query
                }
            }).then(function(response){
                console.log('response', response);
            });
        }

    });
});
