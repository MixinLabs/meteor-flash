Package.describe({
  summary: "Flexible Flash messages for Meteor"
});

Package.on_use(function (api) {
  // Flash messages implementation
  api.use('deps', 'client');
  api.add_files(['./flash.js'], 'client');
  api.export('Flash', 'client');

  // Handlebars Helper
  api.use('spacebars', 'client');
  api.use('ui', 'client');
  api.add_files(['./hbs_helper.js'], 'client');
});
