// App.js
;(function (win) {

    // Check if app its launched
    if (win.App) { return; }

    // Create app
    var App = new Backbone.Marionette.Application();

    App.addRegions({
        'main': '#app-container'
    });

    // Subscribe to "start" application event
    App.on('start', function() {
        Backbone.history.start();
    });

    // Export Application
    win.App = App;

    // Start the App app
    $(function() {
        // This fire "start" application event
        App.start();
    });
}(window));
