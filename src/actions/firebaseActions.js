import {createAction} from 'redux-actions';
import {
  LOG_IN_FIREBASE,
} from '../constants/actionTypes';

// TODO: 製作async action
export const logInFireBase = createAction(LOG_IN_FIREBASE);
