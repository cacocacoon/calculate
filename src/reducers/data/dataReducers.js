import Immutable from 'immutable';
import {handleActions} from 'redux-actions';
import {dataState} from '../../constants/models';

import {
	STEPPER_INIT_STATE,
	ENTITY,
	INIT_CREATE_ENTITY
} from '../../constants/CONST';
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
		let passValidation = true;

		let {
			type,
			date,
			productName,
			count,
			unit,
			unitPrice,
			remark,
		} = state.get('createEntity').toJS();

		const types = Object.values(ENTITY.get('TYPE').toJS());
		//value 不存在 或不是預先定義好的類型就要設定errorText
		type.value = type.value.trim();
		if(!type.value || !types.includes(type.value)) {
			passValidation = false;
			type.errorText = '商品類型錯誤';
			console.log('商品類型錯誤: ', type.value);
		}

		// REVIEW: 日期目前只暫時檢查是否為空
		date.value = date.value.trim();
		if(!date.value) {
			passValidation = false;
			date.errorText = '請選擇日期';
			console.log('請選擇日期 ', date.value);
		}

		productName.value = productName.value.trim();
		if(!productName.value) {
			passValidation = false;
			productName.errorText = '請輸入品名';
			console.log('請輸入名稱 ', productName.value);
		}

		count.value = parseInt(count.value);
		if(isNaN(count.value) || count.value <= 0) {
			if(isNaN(count.value)) {
				count.value = '';
			}
			passValidation = false;
			count.errorText = '數量錯誤';
			console.log('數量錯誤: ', count.value);
		}

		unit.value = unit.value.trim();
		if(!unit.value) {
			passValidation = false;
			unit.errorText = '單位錯誤';
			console.log('單位錯誤 ', unit.value);
		}

		unitPrice.value = parseFloat(unitPrice.value);
		if(isNaN(unitPrice.value) || unitPrice.value <= 0.0) {
			if(isNaN(unitPrice.value)) {
				unitPrice.value = '';
			}
			passValidation = false;
			unitPrice.errorText = '單價錯誤';
			console.log('單價錯誤: ', unitPrice.value);
		}

		remark.value = remark.value.trim();

		let createEntity = Immutable.fromJS({
			type,
			date,
			productName,
			count,
			unit,
			unitPrice,
			remark,
		});

		console.log(`passValidation: ${passValidation}`);
		if(!passValidation) {
			return state.set('createEntity', createEntity);
		}

		// if success reset new entity
		state = state.set('createEntity', INIT_CREATE_ENTITY);
		return state;
	},

}, dataState);

export default dataReducers;
