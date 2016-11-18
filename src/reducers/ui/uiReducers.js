import {handleActions} from 'redux-actions';
import {UIState} from '../../constants/models';

import {STEPPER_INIT_STATE} from '../../constants/CONST';

// NOTE: state 設定好資料記得要 return 才能真正修改 state
const uiReducers = handleActions({
	OPEN_LOG_IN_MODAL: (state) => (
		state.setIn(['logIn', 'modalIsOpen'], true)
	),

	CLOSE_LOG_IN_MODAL: (state) => (
		state.setIn(['logIn', 'modalIsOpen'], false)
	),

	ENABLE_LOG_IN_BUTTON: (state) => (
		state.setIn(['logIn', 'enableLogInButton'], true)
	),

	DISABLE_LOG_IN_BUTTON: (state) => (
		state.setIn(['logIn', 'enableLogInButton'], false)
	),

	GO_OPERATING_STEP: (state, {payload}) => {
		return state.setIn(['operateReminderList', 'step'], payload.step);
	},

	OPEN_OPERATE_MODAL: (state) => {
		return state.setIn(['operateReminderList', 'open'], true);
	},

	CLOSE_OPERATE_MODAL: (state) => {
		return state.setIn(['operateReminderList', 'open'], false);
	},

	INIT_OPERATE_MODAL_UI: (state) => {
		return state.set('operateReminderList', STEPPER_INIT_STATE.get('UI'));
	},

}, UIState);

export default uiReducers;
