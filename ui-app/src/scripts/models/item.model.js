App.module('Example.Models', function(Models, App, Backbone){
    Models.Item = Backbone.Model.extend({
        idAttribute: 'itemId',
        defaults: {
            itemId: 1,
            title: 'Ipod',
            price: '250.40'
        }

    });
});
