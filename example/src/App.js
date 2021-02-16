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
    titleSize,
    titleColor,
    text,
    textSize,
    textColor,
    position,
    icon,
    iconSize,
    iconColor,
    buttonText,
    buttonTextColor,
    buttonBackgroundColor,
    forceShow
  } = useSelector(state => state.A2HS)

  // TODO Handle update app cache with modal
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
      titleSize={titleSize}
      titleColor={titleColor}
      text={text}
      textSize={textSize}
      textColor={textColor}
      position={position}
      icon={icon}
      iconSize={iconSize}
      iconColor={iconColor}
      buttonText={buttonText}
      buttonTextColor={buttonTextColor}
      buttonBackgroundColor={buttonBackgroundColor}
      forceShow={forceShow}
    >
      <ServiceWorkerModal />
      <Routes />
    </A2HSProvider>
  );
}

export default App
