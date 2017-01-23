App.module('Example', function (Example, App, Backbone, Marionette, $, _) {

    var controller = {},
        routes = {};

    controller.index = function () {
        var items = new Example.Collections.Items();
        var item1 = new Example.Models.Item({
            itemId: 1,
            title: 'Ipod',
            price: '999',
            quantity: 2
        });

        var item2 = new Example.Models.Item({
            itemId: 2,
            title: 'Ipod',
            price: '999',
            quantity: 2
        });

        items.add([item1, item2]);
        var itemsView = new Example.Views.Items({
            collection: items
        });

        // var itemView = new Example.Views.Item({
        //     collection: item
        // });

        App.getRegion('main').show(itemsView);

        console.log('itemView', itemView);


        // var item2 = new Example.Models.Item({
        //     itemId: 2,
        //     'available': false
        // });

        // item1.set({
        //     ''
        //     'price': '123',
        //     'available': true,
        //     'picture': {}
        // });

        // items.add(item1);
        // items.add(item2);

        // var newItem = items.create({
        //     'price': '123',
        //     'available': true,
        //     'picture': {}
        // })
        // console.log('items', items);
    };

    controller.foo = function () {
        console.log('seba')
    };

    controller.search = function() {
        var searchView = new App.Example.Views.Search();

        App.getRegion('main').show(searchView);
    }

    /**
     * Example.Router
     */
    routes = {
        '': 'index',
        'foo': 'foo',
        'search': 'search'
    };

    /**
     * Example.Controller
     */
    Example.Router = Marionette.AppRouter.extend({
        'appRoutes': routes,
        'controller': controller
    });

});
