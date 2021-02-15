import React from 'react'
import { useSelector } from 'react-redux'
import { A2HSProvider } from 'react-a2hs'
import Routes from './routes'
import 'react-a2hs/dist/index.css'

const App = () => {
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
      <Routes />
    </A2HSProvider>
  );
}

export default App
