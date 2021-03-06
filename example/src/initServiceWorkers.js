import toUint8Array from 'urlb64touint8array';
import { applicationServerPublicKey, webPushServerUrl } from '../config';

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);
            } else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}

function enablePushNotifications(registration) {
    registration.pushManager.getSubscription()
    .then(function(subscription) {
        const isSubscribed = !(subscription === null);

        if (!isSubscribed) {
            subscribeUserToPushNotifications(registration)
        }
    })
}

function updateSubscriptionOnServer(subscription) {
    // TODO: Send subscription to application server
    console.log('should send fetch body')
    console.log(subscription)
    fetch(`${webPushServerUrl}/add-device`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            mode: 'cors'
        },
        body: JSON.stringify(subscription)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  

function subscribeUserToPushNotifications(registration) {
    const applicationServerKey = toUint8Array(applicationServerPublicKey);
    registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
        console.log('User is subscribed.');

        updateSubscriptionOnServer(subscription);
    })
    .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
    });
}

function registerValidSW(swUrl) {
    navigator.serviceWorker.register(swUrl)
    .then((registration) => {
        navigator.serviceWorker.ready.then(() => {
            enablePushNotifications(registration)
        });
    })
    .catch((error) => {
        console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
    .then((response) => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then((registration) => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        } else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
    .catch(() => {
        console.log(
            'No internet connection found. App is running in offline mode.'
        );
    });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
        .then((registration) => {
            registration.unregister();
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}