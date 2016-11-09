import {handleActions} from 'redux-actions';
import {dataState} from '../../constants/models';

import {
	CHANGE_EMAIL,
	CHANGE_PASSWORD,
} from '../../constants/actionTypes';

// NOTE: state 設定好資料記得要 return 才能真正修改 state
const dataReducers = handleActions({
	CHANGE_EMAIL: (state, {payload}) => {
		return state.setIn(['logIn', 'email'], payload.email);
	},
	CHANGE_PASSWORD: (state, {payload}) => {
		return state.setIn(['logIn', 'password'], payload.password);
	}
}, dataState)

export default dataReducers;
