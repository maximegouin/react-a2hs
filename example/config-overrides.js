const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  webpack: function(config, env) {
    config.resolve = {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        assets: path.resolve(__dirname, 'src/assets/')
      }
    }

    config.plugins = [
      ...config.plugins,
      new GenerateSW({
        skipWaiting: false,
      })
    ]

    return config
  }
}