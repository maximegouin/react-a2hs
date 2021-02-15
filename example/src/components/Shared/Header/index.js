import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import LogoPwa from 'assets/img/logo.png';
import './index.css';

const CustomHeader = ({
  setShowSidebar,
  handleNavigation,
}) => (
  <Menu stackable inverted className="custom-header">
    <Menu.Item onClick={setShowSidebar}>
      <Icon name="bars" />
    </Menu.Item>
    <Menu.Item onClick={handleNavigation} value="/">
      <img src={LogoPwa} alt="logo" value="/" />
    </Menu.Item>
  </Menu>
)

CustomHeader.propTypes = {
  setShowSidebar: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
}

export default CustomHeader;