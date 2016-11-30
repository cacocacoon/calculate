import {createAction} from 'redux-actions';
import {
	CLOSE_LOG_IN_MODAL,
	OPEN_LOG_IN_MODAL,
	CHANGE_EMAIL,
	CHANGE_PASSWORD,
	DISABLE_LOG_IN_BUTTON,
	ENABLE_LOG_IN_BUTTON,
} from '../constants/actionTypes';

export const closeLogInModal = createAction(CLOSE_LOG_IN_MODAL);
export const openLogInModal = createAction(OPEN_LOG_IN_MODAL);
export const changeEmail = createAction(CHANGE_EMAIL);
export const changePassword = createAction(CHANGE_PASSWORD);
export const disableLogInButton = createAction(DISABLE_LOG_IN_BUTTON);
export const enableLogInButton = createAction(ENABLE_LOG_IN_BUTTON);
