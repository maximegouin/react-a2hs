import * as constants from './constants';

const initialState = {
  title: 'Install this app',
  titleSize: 'h2',
  titleColor: 'black',
  text: 'Add this app to your home screen for fast access',
  textSize: 14,
  textColor: 'black',
  position: 'bottom-left',
  icon: 'download',
  iconSize: 'big',
  iconColor: 'black',
  buttonText: 'Add',
  buttonTextColor: 'black',
  buttonBackgroundColor: 'white',
  forceShow: false
};

const A2HSReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TITLE: {
      return {
        ...state,
        title: action.payload,
      };
    }
    case constants.SET_TITLE_COLOR: {
      return {
        ...state,
        titleColor: action.payload,
      };
    }
    case constants.SET_TITLE_SIZE: {
      return {
        ...state,
        titleSize: action.payload,
      };
    }
    case constants.SET_TEXT: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case constants.SET_TEXT_SIZE: {
      return {
        ...state,
        textSize: action.payload,
      };
    }
    case constants.SET_TEXT_COLOR: {
      return {
        ...state,
        textColor: action.payload,
      };
    }
    case constants.SET_POSITION: {
      return {
        ...state,
        position: action.payload,
      };
    }
    case constants.SET_ICON: {
      return {
        ...state,
        icon: action.payload,
      };
    }
    case constants.SET_ICON_SIZE: {
      return {
        ...state,
        iconSize: action.payload,
      };
    }
    case constants.SET_ICON_COLOR: {
      return {
        ...state,
        iconColor: action.payload,
      };
    }
    case constants.SET_BUTTON_TEXT: {
      return {
        ...state,
        buttonText: action.payload,
      };
    }
    case constants.SET_BUTTON_TEXT_COLOR: {
      return {
        ...state,
        buttonTextColor: action.payload,
      };
    }
    case constants.SET_BUTTON_BACKGROUND_COLOR: {
      return {
        ...state,
        buttonBackgroundColor: action.payload,
      };
    }
    case constants.SET_FORCE_SHOW: {
      return {
        ...state,
        forceShow: action.payload,
      };
    }
    default:
      return state;
  }
};

export default A2HSReducer;
