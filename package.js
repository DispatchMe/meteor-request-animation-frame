Package.describe({
  name: 'dispatch:request-animation-frame',
  version: '0.0.1',
  summary: 'requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel',
  git: 'https://github.com/DispatchMe/meteor-request-animation-frame.git'
});

Package.onUse(function (api) {
  api.addFiles([
    'request-animation-frame.js'
  ], 'web');
});
