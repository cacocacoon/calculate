import Immutable from 'immutable';


export const UIState = Immutable.fromJS({
	logIn: {
		modalIsOpen: false,
		enableLogInButton: true
	},
	operateReminderList: {
		open: false,
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
		name: '',
		nameList: [],
		errorText: '',
	},

});
