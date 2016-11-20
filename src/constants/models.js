import Immutable from 'immutable';
import {
	ENTITY,
	INIT_CREATE_ENTITY
} from '../constants/CONST';

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
// const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
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
	createEntity: INIT_CREATE_ENTITY,


});
