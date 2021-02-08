const initServiceWorkers = () => {
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://localhost/OneSignalSDKWorker.js');
        });
    }
}

export default initServiceWorkers;