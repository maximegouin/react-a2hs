import { combineReducers } from 'redux';
import GlobalReducer from 'containers/Home/reducer';
import A2HSReducer from 'containers/A2HS/reducer';

const rootReducer = combineReducers({
  Global: GlobalReducer,
  A2HS: A2HSReducer,
});

export default rootReducer;