App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Controls = Marionette.ItemView.extend({
        template: App.Example.templates.controls,

        initialize: function(){
        }
    });
});
