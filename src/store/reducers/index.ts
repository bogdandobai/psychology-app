import { combineReducers } from 'redux';

import AppState from '../state/AppState';
import authReducer from '@auth/store/reducers/auth.reducer';


export default combineReducers<AppState>({
  auth: authReducer,
});
