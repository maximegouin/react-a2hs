import * as constants from './constants';

const initialState = {
  showSidebar: false,
  showServiceWorkerModal: false,
  workboxBroadcastUpdate: {},
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
        workboxBroadcastUpdate: action.payload,
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
