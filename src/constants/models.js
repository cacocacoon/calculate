import Immutable from 'immutable';


export const UIState = Immutable.fromJS({
	logIn: {
		modalIsOpen: false,
		enableLogInButton: true
	},
	operateReminderList: {
		step: 0,
	},
});

export const dataState = Immutable.fromJS({
	logIn: {
		email: '',
		password: ''
	},
	operateReminderList: {
		type: '',
	},
});
