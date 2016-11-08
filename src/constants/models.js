import Immutable from 'immutable';


export const UIState = Immutable.fromJS({
	logInModalIsOpen: false,
});

export const dataState = Immutable.fromJS({
	logIn: {
		email: '',
		password: ''
	}
});
