/* eslint-disable no-restricted-globals */
self.addEventListener('push', function(event) {
  const title = 'React A2HS';
  const options = {
    body: event.data.text(),
    badge: './apple-touch-icon.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

