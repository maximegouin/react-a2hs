import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { A2HSProvider } from 'react-a2hs'
import { SET_SHOW_SERVICE_WORKER_MODAL } from 'containers/Global/constants'
import ServiceWorkerModal from 'components/Shared/ServiceWorkerModal'
import Routes from './routes'
import 'react-a2hs/dist/index.css'
const channelSwCacheUpdates = new BroadcastChannel('sw-cache-updates');

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

  channelSwCacheUpdates.onmessage = ({ data }) => {
    if(data === 'sw-updated') {
      dispatch({ type: SET_SHOW_SERVICE_WORKER_MODAL })
    }
  }
  
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
