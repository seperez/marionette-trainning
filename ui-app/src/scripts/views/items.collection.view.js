App.module('Example.Views', function(Views, App, Backbone, Marionette, $, _) {
    'use strict';

    Views.Items = Marionette.CollectionView.extend({
        childView: Views.Item
    });
});
