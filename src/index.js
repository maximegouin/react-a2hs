import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { If } from 'react-if'
import A2HSButton from './components/A2HSButton'
import 'semantic-ui-css/semantic.min.css'
import './styles.module.css'

export const A2HSProvider = ({ children, ...props }) => {
  const [showA2HS, setShowA2HS] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState()

  const isAppInstalled = async () => {
    const relatedApps = await navigator.getInstalledRelatedApps()
    console.log(relatedApps)
    relatedApps.forEach((app) => {
      console.log(app.id, app.platform, app.url)
    })
  }

  useEffect(() => {
    isAppInstalled()
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Save the event so it can be triggered later.
      setDeferredPrompt(e)
      // Update UI to notify the user they can add to home screen
      setShowA2HS(true)
    })
  }, [])

  const handleClick = () => {
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        setShowA2HS(false)
      }
    })
  }

  const handleClose = () => {
    setShowA2HS(false)
  }

  return (
    <React.Fragment>
      <If condition={showA2HS}>
        <A2HSButton
          {...props}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      </If>
      {children}
    </React.Fragment>
  )
}

A2HSProvider.propTypes = {
  children: PropTypes.node.isRequired
}
