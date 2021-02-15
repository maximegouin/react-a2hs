import * as constants from './constants';

const initialState = {
  showSidebar: false,
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_SIDEBAR: {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
