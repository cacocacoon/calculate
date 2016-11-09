import Immutable from 'immutable';


export const UIState = Immutable.fromJS({
	logInModalIsOpen: false,
	logIn: {
		enableLogInButton: true
	}
});

export const dataState = Immutable.fromJS({
	logIn: {
		email: '',
		password: ''
	}
});
