'use strict';

App.module('Example.Router', function (Router, App, Backbone, Marionette, $, _) {
    'use strict';

    var controller = {},
        routes = {};

    controller.index = function () {
        var itemModel = new App.Example.Models.Item({
            'title': 'Item de testeo'
        });

        // DONY NO: itemModel.attributes.title

        // manejo de attributos
        // itemModel.get('title');
        // itemModel.set('title', 'My Title');

        var itemModel2 = new App.Example.Models.Item({
            'title': 'Item de testeo 2'
        });

        var itemCollection = new App.Example.Collections.Items();
        itemCollection.add(itemModel);
        itemCollection.add(itemModel2);

        // console.log(itemCollection);

        // Marionnete Views, Layout, Collection, Composite, Item

        // var itemView = new App.Example.Views.Item({
        //     model: itemModel,
        //     foo: 'lala'
        // });

        var searchView = new App.Example.Views.Search();

        App.getRegion('main').show(searchView);
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
    App.Example.Controller = controller;
    App.Example.Router = Marionette.AppRouter.extend({
        'appRoutes': routes,
        'controller': controller
    });

});
