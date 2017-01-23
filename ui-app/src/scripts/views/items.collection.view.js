App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {
    'use strict';

    // Views.Items = Marionette.CollectionView.extend({
    //     childView: Views.Item
    // });

    Views.Items = Marionette.CompositeView.extend({
        template: App.Example.templates.results,
        childView: Views.Item,
        childViewContainer: '[data-js="tbody"]'

    });
});
