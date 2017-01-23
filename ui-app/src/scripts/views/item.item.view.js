App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {

    Views.Item = Marionette.ItemView.extend({
        template: App.Example.templates.item,
        tagName: 'tr'

        // initialize: function(options){
        //     console.log(this.model);
        // },
        //
        // templateHelpers: function(){
        //     return {
        //         foo: this.options.foo
        //     }
        // }
    });
});
