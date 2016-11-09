import Immutable from 'immutable';


export const UIState = Immutable.fromJS({
	logIn: {
		modalIsOpen: false,
		enableLogInButton: true
	}
});

export const dataState = Immutable.fromJS({
	logIn: {
		email: '',
		password: ''
	}
});
