import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import './index.css';

const CustomSidebar = ({
    showSidebar,
    handleNavigation,
    children,
}) => (
    <Sidebar.Pushable as={Segment} className="custom-sidebar">
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={showSidebar}
            width='thin'
        >
            <Menu.Item as='a' onClick={handleNavigation} value='/'>
                <Icon name='home' value='/'/>
                Home
            </Menu.Item>
            <Menu.Item as='a' onClick={handleNavigation} value='/prerequisites'>
                <Icon name='cogs' value='/prerequisites' />
                Prerequisites
            </Menu.Item>
            <Menu.Item as='a' onClick={handleNavigation} value='/supported-browsers'>
                <Icon name='browser' value='/supported-browsers' />
                Supported browsers
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={showSidebar}>
            <Segment basic>
                {children}
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

CustomSidebar.propTypes = {
    handleNavigation: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default CustomSidebar;