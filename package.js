Package.describe({
  summary: "Provides methods for simulating complex user interactions"
});

Package.on_use(function (api, where) {
  api.use('jquery');
  
  var LIB_DIR = 'jquery-simulate-ext';
  api.add_files([
    LIB_DIR + '/libs/bililiteRange.js',
    LIB_DIR + '/libs/jquery.simulate.js',
    LIB_DIR + '/src/jquery.simulate.ext.js',
    LIB_DIR + '/src/jquery.simulate.drag-n-drop.js',
    LIB_DIR + '/src/jquery.simulate.key-sequence.js',
    LIB_DIR + '/src/jquery.simulate.key-combo.js',
  ], 'client');
});
