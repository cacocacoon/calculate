import Immutable from 'immutable';
import {ENTITY} from '../constants/CONST';

export const UIState = Immutable.fromJS({
	logIn: {
		modalIsOpen: false,
		enableLogInButton: true
	},
	operateReminderList: {
		open: false,
		step: 0,
	},
	reminderEditor: {
		open: true,
	}
});
const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
export const dataState = Immutable.fromJS({
	logIn: {
		email: '',
		password: ''
	},
	operateReminderList: {
		type: '',
		name: '',
		nameList: [],
		errorText: '',
	},
	createEntity: {
		type: {
			value: DIESEL,
			errorText: ''
		},
		date: {
			value: '',
			errorText: '',
		},
		productName: {
			value: '超級柴油',
			errorText: '',
		},
		count: {
			value: '0',
			errorText: '',
		},
		unit: {
			value: 'L',
			errorText: '',
		},
		unitPrice: {
			value: '0.0',
			errorText: '',
		},
		remark: {
			value: '',
			errorText: '',
		},
	}

});
