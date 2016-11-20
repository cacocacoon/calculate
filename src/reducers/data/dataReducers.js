import Immutable from 'immutable';
import {handleActions} from 'redux-actions';
import {dataState} from '../../constants/models';

import {STEPPER_INIT_STATE} from '../../constants/CONST';
// NOTE: state 設定好資料記得要 return 才能真正修改 state
const dataReducers = handleActions({
	CHANGE_EMAIL: (state, {payload}) => {
		return state.setIn(['logIn', 'email'], payload.email);
	},

	CHANGE_PASSWORD: (state, {payload}) => {
		return state.setIn(['logIn', 'password'], payload.password);
	},

	SET_OPERATING_TYPE: (state, {payload}) => {
		return state.setIn(['operateReminderList', 'type'], payload.type);
	},

	SET_REMINDERLIST_NAMELIST: (state, {payload}) => {
		return state.setIn(['operateReminderList', 'nameList'], payload.reminderListNameList);
	},

	SET_OPERATE_NAME_INPUT_ERRORTEXT: (state, {payload}) => {
		return state.setIn(['operateReminderList', 'errorText'], payload.errorText);
	},

	SET_OPERATE_REMINDERLIST_NAME: (state, {payload}) => {
		return state.setIn(['operateReminderList', 'name'], payload.name);
	},

	SET_REMINDERLIST: (state, {payload}) => {
		return state.set('reminderList', Immutable.fromJS(payload));
	},

	INIT_OPERATE_MODAL_DATA: (state) => {
		return state.set('operateReminderList', STEPPER_INIT_STATE.get('DATA'));
	},

	SET_CREATE_ENTITY_TYPE: (state, {payload}) => {
		return state.setIn(['createEntity', 'type'], Immutable.fromJS(payload));
	},

	SET_CREATE_ENTITY_DATE: (state, {payload}) => {
		return state.setIn(['createEntity', 'date'], Immutable.fromJS(payload));
	},

	SET_CREATE_ENTITY_PRODUCT_NAME: (state, {payload}) => {
		return state.setIn(['createEntity', 'productName'], Immutable.fromJS(payload));
	},

	SET_CREATE_ENTITY_COUNT: (state, {payload}) => {
		return state.setIn(['createEntity', 'count'], Immutable.fromJS(payload));
	},

	SET_CREATE_ENTITY_UNIT: (state, {payload}) => {
		return state.setIn(['createEntity', 'unit'], Immutable.fromJS(payload));
	},

	SET_CREATE_ENTITY_UNIT_PRICE: (state, {payload}) => {
		return state.setIn(['createEntity', 'unitPrice'], Immutable.fromJS(payload));
	},

	SET_CREATE_ENTITY_REMARK: (state, {payload}) => {
		return state.setIn(['createEntity', 'remark'], Immutable.fromJS(payload));
	},

	PUSH_NEW_ENTITY: (state) => {
		let createEntity = state.get('createEntity');

		let type = createEntity
		// if success reset new entity
		return state;
	},

}, dataState);

export default dataReducers;
