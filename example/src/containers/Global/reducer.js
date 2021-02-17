import * as constants from './constants';

const initialState = {
  showSidebar: false,
  showServiceWorkerModal: false,
  networkMode: null,
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_SIDEBAR: {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    }
    case constants.SET_SHOW_SERVICE_WORKER_MODAL: {
      return {
        ...state,
        showServiceWorkerModal: !state.showServiceWorkerModal,
      };
    }
    case constants.SET_NETWORK_MODE: {
      return {
        ...state,
        networkMode: action.payload,
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
