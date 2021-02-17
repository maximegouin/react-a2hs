import { Workbox } from 'workbox-window';
import { SET_SHOW_SERVICE_WORKER_MODAL, SET_NETWORK_MODE } from 'containers/Global/constants';

export const register = (dispatch) => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        // TODO Send message saying webapp is available offline
      } else {
        window.location.reload()
      }
    });

    wb.addEventListener('waiting', () => {
      dispatch({ type: SET_SHOW_SERVICE_WORKER_MODAL })
    });

    wb.register();

    window.addEventListener('offline', () => {
      dispatch({ type: SET_NETWORK_MODE, payload: 'offline' })
    })

    window.addEventListener('online', () => {
      dispatch({ type: SET_NETWORK_MODE, payload: 'online' })
    })
  }
}