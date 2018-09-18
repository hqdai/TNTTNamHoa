import { combineReducers } from 'redux';
import { AuthReducer } from './ducks/Auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
