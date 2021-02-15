import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomHeader from 'components/Shared/Header';
import CustomSidebar from 'components/Shared/Sidebar';
import { SHOW_SIDEBAR } from 'containers/Home/constants';

const PageLayout = ({
    children,
}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { showSidebar } = useSelector(state => state.Global)
    const setShowSidebar = () => dispatch({ type: SHOW_SIDEBAR })

    const handleNavigation = (_, { value }) => {
        history.push(value)
        if(showSidebar) {
            setShowSidebar()
        }
    }

    return (
        <div>
            <CustomHeader
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                handleNavigation={handleNavigation}
            />
            <CustomSidebar 
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                children={children}
                handleNavigation={handleNavigation}
            />
        </div>
    );
}

export default PageLayout;