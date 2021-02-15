import * as constants from './constants';

const initialState = {
    title: 'Add to home screen',
    position: 'bottom-left',
    titleColor: 'white',
    buttonIcon: 'download',
    buttonColor: 'black',
    buttonSize: 'medium',
    buttonIconColor: 'white',
    closeButtonSize: 'small',
    closeButtonIcon: 'close',
    closeButtonIconColor: 'bottom-left',
    closeButtonColor: 'bottom-left',
};

const A2HSReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case constants.SET_POSITION: {
      return {
        ...state,
        position: action.payload,
      };
    }
    case constants.SET_TITLE_COLOR: {
      return {
        ...state,
        titleColor: action.payload,
      };
    }
    case constants.SET_BUTTON_ICON: {
      return {
        ...state,
        buttonIcon: action.payload,
      };
    }
    case constants.SET_BUTTON_COLOR: {
      return {
        ...state,
        buttonColor: action.payload,
      };
    }
    case constants.SET_BUTTON_SIZE: {
      return {
        ...state,
        buttonSize: action.payload,
      };
    }
    case constants.SET_BUTTON_ICON_COLOR: {
      return {
        ...state,
        buttonIconColor: action.payload,
      };
    }
    case constants.SET_CLOSE_BUTTON_SIZE: {
      return {
        ...state,
        closeButtonSize: action.payload,
      };
    }
    case constants.SET_CLOSE_BUTTON_ICON: {
      return {
        ...state,
        closeButtonIcon: action.payload,
      };
    }
    case constants.SET_CLOSE_BUTTON_ICON_COLOR: {
      return {
        ...state,
        closeButtonIconColor: action.payload,
      };
    }
    case constants.SET_CLOSE_BUTTON_COLOR: {
      return {
        ...state,
        closeButtonColor: action.payload,
      };
    }
    default:
      return state;
  }
};

export default A2HSReducer;
