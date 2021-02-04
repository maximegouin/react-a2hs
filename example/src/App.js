import React, { useState } from 'react'
import { A2HSProvider } from 'react-a2hs'
import Example from './containers/Example'
import 'react-a2hs/dist/index.css'

const App = () => {
  const [title, setTitle] = useState('Add to home screen')
  const [position, setPosition] = useState('bottom-left')
  const [titleColor, setTitleColor] = useState('white')
  const [buttonIcon, setButtonIcon] = useState('download')
  const [buttonColor, setButtonColor] = useState('black')
  const [buttonSize, setButtonSize] = useState('medium')
  const [buttonIconColor, setButtonIconColor] = useState('white')
  const [closeButtonSize, setCloseButtonSize] = useState('small')
  const [closeButtonIcon, setCloseButtonIcon] = useState('close')
  const [closeButtonIconColor, setCloseButtonIconColor] = useState('bottom-left')
  const [closeButtonColor, setCloseButtonColor] = useState('bottom-left')

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
      <Example 
        title={title}
        setTitle={setTitle}
        position={position}
        setPosition={setPosition}
        titleColor={titleColor}
        setTitleColor={setTitleColor}
        buttonIcon={buttonIcon}
        setButtonIcon={setButtonIcon}
        buttonColor={buttonColor}
        setButtonColor={setButtonColor}
        buttonSize={buttonSize}
        setButtonSize={setButtonSize}
        buttonIconColor={buttonIconColor}
        setButtonIconColor={setButtonIconColor}
        closeButtonSize={closeButtonSize}
        setCloseButtonSize={setCloseButtonSize}
        closeButtonIcon={closeButtonIcon}
        setCloseButtonIcon={setCloseButtonIcon}
        closeButtonIconColor={closeButtonIconColor}
        setCloseButtonIconColor={setCloseButtonIconColor}
        closeButtonColor={closeButtonColor}
        setCloseButtonColor={setCloseButtonColor}
      />
    </A2HSProvider>
  );
}

export default App
