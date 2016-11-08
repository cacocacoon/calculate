import {handleActions} from 'redux-actions';
import {dataState} from '../../constants/models';

import {
	CHANGE_EMAIL,
	CHANGE_PASSWORD,
} from '../../constants/actionTypes';

// NOTE: state 設定好資料記得要 return 才能真正修改 state
const dataReducers = handleActions({
	// TODO: 要注意設定 state 有沒有成功
	// TODO: 確認一下 payload 裡面長甚麼樣子
	CHANGE_EMAIL: (state, {payload}) => {
		return state.setIn(['logIn', 'email'], payload.email);
	},
	CHANGE_PASSWORD: (state, {payload}) => {
		return state.setIn(['logIn', 'password'], payload.password);
	}
}, dataState)

export default dataReducers;
