import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducers';

export default combineReducers({ auth, user });
