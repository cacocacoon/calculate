import {handleActions} from 'redux-actions';
import {UIState} from '../../constants/models';

import {
	OPEN_LOG_IN_MODAL,
	CLOSE_LOG_IN_MODAL
} from '../../constants/actionTypes';

// NOTE: state 設定好資料記得要 return 才能真正修改 state
const uiReducers = handleActions({
	// TODO: 開啟登入的頁面 test DONE
	OPEN_LOG_IN_MODAL: (state) => (
		state.merge({
			logInModalIsOpen: true
		})
	),
	// TODO: 關閉登入的頁面 test DONE
	CLOSE_LOG_IN_MODAL: (state) => (
		state.merge({
			logInModalIsOpen: false
		})
	),
	// TODO: 打開登入按鈕 DONE
	ENABLE_LOG_IN_BUTTON: (state) => (
		state.setIn(['logIn', 'enableLogInButton'], true)
	),
	// TODO: 鎖住登入按鈕 DONE
	DISABLE_LOG_IN_BUTTON: (state) => (
		state.setIn(['logIn', 'enableLogInButton'], false)
	),
}, UIState);

export default uiReducers;
