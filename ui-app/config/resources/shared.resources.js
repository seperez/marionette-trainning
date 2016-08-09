exports.scripts = [
    'src/scripts/polyfills.js',

    // Marionette
    'node_modules/jquery/dist/jquery.js',
    'node_modules/handlebars/dist/handlebars.js',
    'node_modules/underscore/underscore.js',
    'node_modules/backbone/backbone.js',
    'node_modules/backbone.marionette/lib/backbone.marionette.js',

    // Application and Configs
    'src/scripts/app.js',

    'src/scripts/modules/example.module.js',
    'ui-build/templates/all-the-templates.js',

    // Modules
    'src/scripts/modules/handlebars-helpers.module.js',
    'src/scripts/modules/utils.module.js',
    'src/scripts/modules/urls.module.js',
    'src/scripts/modules/config.module.js',
    // Models
    'src/scripts/models/item.model.js',
    // Collections
    'src/scripts/collections/items.collection.js',

    // Views
    'src/scripts/views/item.item.view.js',
    'src/scripts/views/items.collection.view.js',
    'src/scripts/views/controls.item.view.js',
    'src/scripts/views/search.layout.view.js',

    //
    'src/scripts/modules/router.module.js'
];

exports.styles = [
    './src/styles/**/*.scss'
];

exports.fonts = [
    './src/fonts/**/*.{ttf,woff,eof,svg}'
];

exports.images = [
    './src/images/**/*.{png,jpg,ico,svg}'
];

exports.urls = [
    './src/scripts/urls.json'
];

exports.mocks = [
    './mocks/**/*.json'
];

exports.templates = [
    './src/templates/**/*.hbs'
];

exports.partials = [
    './src/templates/**/_*.hbs'
];
