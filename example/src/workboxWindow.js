import { Workbox } from 'workbox-window';

export const register = (showModal) => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/service-worker.js');

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        // TODO Send message saying webapp is available offline
      } else {
        window.location.reload()
      }
    });

    wb.addEventListener('waiting', () => {
      showModal();
    });

    wb.register();
  }
}