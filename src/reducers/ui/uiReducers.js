import {handleActions} from 'redux-actions';
import {UIState} from '../../constants/models';

import {
	OPEN_LOG_IN_MODAL,
	CLOSE_LOG_IN_MODAL,
} from '../../constants/actionTypes';

// NOTE: state 設定好資料記得要 return 才能真正修改 state
const uiReducers = handleActions({
	// TODO: 開啟登入的頁面 test
	OPEN_LOG_IN_MODAL: (state) => (
		state.merge({
			logInModalIsOpen: true
		})
	),
	// TODO: 關閉登入的頁面 test
	CLOSE_LOG_IN_MODAL: (state) => (
		state.merge({
			logInModalIsOpen: false
		})
	)
}, UIState);

export default uiReducers;
