import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { If } from 'react-if'
import { Message, Header, Icon, Button } from 'semantic-ui-react'
import {
  POSITION_BOTTOM_LEFT,
  POSITION_BOTTOM_RIGHT,
  POSITION_TOP_LEFT,
  POSITION_TOP_RIGHT
} from './constants'
import styles from './styles.css'

const A2HSButton = ({
  title,
  titleSize = 'h2',
  titleColor = 'black',
  text,
  textSize = 14,
  textColor = 'black',
  position = 'bottom-left',
  icon,
  iconSize = 'big',
  iconColor = 'black',
  buttonText = 'Add',
  buttonTextColor = 'black',
  buttonBackgroundColor = 'white',
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

  const getTextFontSize = useCallback(() => {
    return `${textSize}px`
  }, [textSize])

  return (
    <div className={`${styles.a2hsContainer} ${positionClassName()}`}>
      <Message
        compact
        onDismiss={handleClose}
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <If condition={icon}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '5px'
            }}
          >
            <Icon name={icon} size={iconSize} style={{ color: iconColor }} />
          </div>
        </If>
        <div>
          <If condition={title}>
            <Header
              as={titleSize}
              className='message-header'
              style={{ color: titleColor }}
            >
              {title}
            </Header>
          </If>
          <If condition={text}>
            <p style={{ color: textColor, fontSize: getTextFontSize() }}>
              {text}
            </p>
          </If>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '5px',
            marginLeft: '5px'
          }}
        >
          <Button
            onClick={handleClick}
            style={{
              color: buttonTextColor,
              backgroundColor: buttonBackgroundColor
            }}
          >
            {buttonText}
          </Button>
        </div>
      </Message>
    </div>
  )
}

A2HSButton.propTypes = {
  title: PropTypes.string,
  titleSize: PropTypes.string,
  titleColor: PropTypes.string,
  text: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  position: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonBackgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func
}

export default A2HSButton
