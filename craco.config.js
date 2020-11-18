const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#80bd01',
              '@link-color': '#08979c'
          },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};