Package.describe({
  name: 'efrancis:iview',
  version: '0.0.7',
  // Brief, one-line summary of the package.
  summary: 'A high quality UI Toolkit based on Vue.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ejfrancis/meteor-iview.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('ecmascript@0.8.2', 'client');
  api.use('akryum:vue-component@0.10.5', 'client');
  api.addFiles([
    // use .js from src/ because dist/ is built for webpack
    'startup.js',
    // use css from dist/ so no need for less
    'iview/dist/styles/iview.css'
  ], 'client');
  api.addAssets([
    'iview/dist/styles/fonts/ionicons.eot',
    'iview/dist/styles/fonts/ionicons.svg',
    'iview/dist/styles/fonts/ionicons.ttf',
    'iview/dist/styles/fonts/ionicons.woff'
  ], 'client');
});