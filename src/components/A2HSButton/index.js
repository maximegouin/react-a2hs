import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import {
  POSITION_BOTTOM_LEFT,
  POSITION_BOTTOM_RIGHT,
  POSITION_TOP_LEFT,
  POSITION_TOP_RIGHT
} from './constants'
import styles from './styles.css'

const A2HSButton = ({
  title = 'Add to home screen',
  position = 'bottom-left',
  titleColor = 'white',
  buttonIcon = 'download',
  buttonColor = 'black',
  buttonSize = 'medium',
  buttonIconColor = 'white',
  closeButtonSize = 'small',
  closeButtonIcon = 'close',
  closeButtonIconColor = 'gray',
  closeButtonColor = 'gray',
  handleClick,
  handleClose
}) => {
  const positionClassName = useCallback(() => {
    switch (position) {
      case POSITION_BOTTOM_LEFT:
        return styles.bottomLeft
      case POSITION_BOTTOM_RIGHT:
        return styles.bottomRight
      case POSITION_TOP_LEFT:
        return styles.topLeft
      case POSITION_TOP_RIGHT:
        return styles.topRight
      default:
        return styles.bottomLeft
    }
  }, [position])

  return (
    <div className={`${styles.a2hsContainer} ${positionClassName()}`}>
      <Button
        icon
        style={{
          backgroundColor: buttonColor
        }}
        size={buttonSize}
        onClick={handleClick}
      >
        <Icon name={buttonIcon} style={{ color: buttonIconColor }} />
        <span className={styles.buttonText} style={{ color: titleColor }}>
          {title}
        </span>
      </Button>
      <Button
        icon
        circular
        size={closeButtonSize}
        style={{ backgroundColor: closeButtonColor }}
        onClick={handleClose}
      >
        <Icon name={closeButtonIcon} style={{ color: closeButtonIconColor }} />
      </Button>
    </div>
  )
}

A2HSButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  position: PropTypes.string,
  titleColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonIconColor: PropTypes.string,
  closeButtonSize: PropTypes.string,
  closeButtonIcon: PropTypes.string,
  closeButtonIconColor: PropTypes.string,
  closeButtonColor: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default A2HSButton
