import { combineReducers } from 'redux';
import GlobalReducer from 'containers/Global/reducer';
import A2HSReducer from 'containers/Home/reducer';

const rootReducer = combineReducers({
  Global: GlobalReducer,
  A2HS: A2HSReducer,
});

export default rootReducer;