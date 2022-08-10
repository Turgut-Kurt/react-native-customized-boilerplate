import authReducer from './modules/auth/slice';
import {combineReducers} from 'redux';
import settingsReducer from './modules/settings/slice';

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export default rootReducers;
