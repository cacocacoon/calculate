import {handleActions} from 'redux-actions';
import {UIState} from '../../constants/models';

import {
	OPEN_LOG_IN_MODAL,
	CLOSE_LOG_IN_MODAL
} from '../../constants/actionTypes';

// NOTE: state 設定好資料記得要 return 才能真正修改 state
const uiReducers = handleActions({
	OPEN_LOG_IN_MODAL: (state) => (
		state.merge({
			logInModalIsOpen: true
		})
	),

	CLOSE_LOG_IN_MODAL: (state) => (
		state.merge({
			logInModalIsOpen: false
		})
	),

	ENABLE_LOG_IN_BUTTON: (state) => (
		state.setIn(['logIn', 'enableLogInButton'], true)
	),

	DISABLE_LOG_IN_BUTTON: (state) => (
		state.setIn(['logIn', 'enableLogInButton'], false)
	),
}, UIState);

export default uiReducers;
