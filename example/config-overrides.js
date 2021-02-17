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
        exclude: [/\.(?:png|jpg|jpeg|svg|ico)$/],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50,
              },
            },
          },
          {
            urlPattern: /manifest.json/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'manifest',
            },
          }
        ],
      })
    ]

    return config
  }
}