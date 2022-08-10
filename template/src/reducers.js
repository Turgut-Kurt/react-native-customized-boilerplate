import authReducer from './modules/auth/slice';
import {combineReducers} from 'redux';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  auth: authReducer,
});

export default rootReducers;
