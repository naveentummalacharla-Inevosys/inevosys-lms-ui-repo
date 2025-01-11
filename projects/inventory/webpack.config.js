const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'inventory',
  filename: 'remoteEntry.js',
  exposes: {
    './Component': './projects/inventory/src/app/app.component.ts',
    './Routes': './src/app/app.routes.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
    }),
  },
});
