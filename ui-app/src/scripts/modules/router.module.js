App.module('Example', function (Example, App, Backbone, Marionette, $, _) {
    'use strict';

    var controller = {},
        routes = {};

    controller.index = function () {
        // var itemsCollection = new Example.Collections.Items([
        //     {
        //         title: 'a'
        //     },
        //     {
        //         title: 'b'
        //     }
        // ]);


        // var itemModel = new Example.Models.Item({
        //     title: 'Ipod'
        // });
        // var itemsCollection = new Example.Collections.Items();
        // itemsCollection.add(itemModel);
        //
        // console.log(itemsCollection);
        //
        // var searchView = new Example.Views.Search();

        var itemsCollection = new Example.Collections.Items();
        itemsCollection.fetch({
            data: {
                q: 'ipod'
            }
        });

        var itemsView = new Example.Views.Items({
            collection: itemsCollection
        });

        App.getRegion('main').show(itemsView);
    };

    /**
     * Example.Router
     */
    routes = {
        '': 'index'
    };

    /**
     * Example.Controller
     */
    Example.Router = Marionette.AppRouter.extend({
        'appRoutes': routes,
        'controller': controller
    });

});
