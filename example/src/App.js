import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { A2HSProvider } from 'react-a2hs'
import { SET_SHOW_SERVICE_WORKER_MODAL } from 'containers/Home/constants'
import ServiceWorkerModal from 'components/Shared/ServiceWorkerModal'
import Routes from './routes'
import 'react-a2hs/dist/index.css'

const App = () => {
  const dispatch = useDispatch()
  const {
    title,
    position,
    titleColor,
    buttonIcon,
    buttonColor,
    buttonSize,
    buttonIconColor,
    closeButtonSize,
    closeButtonIcon,
    closeButtonIconColor,
    closeButtonColor,
  } = useSelector(state => state.A2HS)

  navigator.serviceWorker.addEventListener('message', (event) => {
    console.log(event)
    if (event.data.meta === 'workbox-broadcast-update') {
      console.log(event)
      dispatch({ type: SET_SHOW_SERVICE_WORKER_MODAL, payload: event.data.payload })
    }
  });

  return (
    <A2HSProvider
      title={title}
      position={position}
      titleColor={titleColor}
      buttonIcon={buttonIcon}
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      buttonIconColor={buttonIconColor}
      closeButtonSize={closeButtonSize}
      closeButtonIcon={closeButtonIcon}
      closeButtonIconColor={closeButtonIconColor}
      closeButtonColor={closeButtonColor}
    >
      <ServiceWorkerModal />
      <Routes />
    </A2HSProvider>
  );
}

export default App
