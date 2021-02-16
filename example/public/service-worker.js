const { registerRoute } = require('workbox-routing');
const { StaleWhileRevalidate } = require('workbox-strategies');
const { BroadcastUpdatePlugin } = require('workbox-broadcast-update');

registerRoute(
    ({request}) => request.destination === 'script' ||
                   request.destination === 'style',
    new StaleWhileRevalidate({
        plugins: [
          new BroadcastUpdatePlugin(),
        ],
    })
);