App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Item = Marionette.ItemView.extend({
        //
        // el: 'div',
        //className: 'foo2',

        template: App.Example.templates.item,

        initialize: function(){
            console.log('Model:', this.model);
            console.log('Foo:', this.options.foo);
        },

        templateHelpers: function() {
            return {
                foo: this.options.foo
            }
        }
    });
});
