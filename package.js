/* global Package */

Package.describe({
  name: 'quave:logged-user-react',
  summary: 'Logged user utilities for React apps',
  version: '1.0.0',
  git: 'https://github.com/quavedev/logged-user-react'
});

Package.onUse(api => {
  api.versionsFrom('2.5.3');

  api.use('ecmascript');

  api.use('react-meteor-data@2.4.0');

  api.mainModule('logged-user-react.js', 'client');
});
