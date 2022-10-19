import {combineReducers} from 'redux';
import authReducer, {AuthState} from './auth.reducer';

export interface AppState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth: authReducer
});
export default rootReducer;
