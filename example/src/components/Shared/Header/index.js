import React, { useState, useEffect, useCallback  } from 'react';
import { useSelector } from 'react-redux';
import { If } from 'react-if';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Menu, Icon, Message, Transition } from 'semantic-ui-react';
import LogoPwa from 'assets/img/logo.png';
import './index.css';

const CustomHeader = ({
  setShowSidebar,
  handleNavigation,
}) => {
  const [showTransition, setShowTransition] = useState(false)
  const { networkMode } = useSelector(state => state.Global)

  const isOffline = networkMode === 'offline' ? true : false

  const delayedClose = useCallback(debounce(() => setShowTransition(false), 500), []);

  useEffect(
    () => {
      if (isOffline) {
        delayedClose.cancel()
        setShowTransition(true)
      } else {
        delayedClose()
      }
    },
    [delayedClose, isOffline],
  )

  const offlineBannerColor = () => isOffline ? '#5a0fc8' : 'white'
  const offlineTextColor = () => isOffline ? 'white' : 'black'

  return (
    <>
      <Transition.Group animation={'swing up'} duration={1500}>
        {showTransition && (
          <Message
            style={{
              marginBottom: '0px',
              backgroundColor: offlineBannerColor(),
              color: offlineTextColor(),
              fontWeight: 'bold',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
            size='small'
            className={`message-${networkMode}`}
          >
            <Icon name="exclamation triangle" size="large" style={{ color: offlineTextColor(), marginRight: '10px' }} />
            {networkMode === 'offline'
              ? 'The app is running in offline mode'
              : 'Internet connection is back'
            }
          </Message>
        )}
      </Transition.Group>
      <Menu inverted className="custom-header">
        <Menu.Item onClick={setShowSidebar}>
          <Icon name="bars" />
        </Menu.Item>
        <Menu.Item onClick={handleNavigation} value="/">
          <img src={LogoPwa} alt="logo" value="/" />
        </Menu.Item>
        <Menu.Item onClick={handleNavigation}>
          React-A2HS Demo
        </Menu.Item>
      </Menu>
    </>
  )
}

CustomHeader.propTypes = {
  setShowSidebar: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
}

export default CustomHeader;