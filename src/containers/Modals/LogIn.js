import {connect} from 'react-redux';
import LogIn from '../../components/Modals/LogIn';
import firebaseAuth from '../../firebase/auth';

import {
	closeLogInModal,
	openLogInModal,
	changeEmail,
	changePassword,
	logInFireBase
} from '../../actions';

export default connect(
	(state) => {
		let stateMap = {
			open: state.getIn(['ui', 'logIn', 'modalIsOpen']),
			enableLogInButton: state.getIn(['ui', 'logIn', 'enableLogInButton']),
			email: state.getIn(['data', 'logIn', 'email']),
			password: state.getIn(['data', 'logIn', 'password']),
		};

		return stateMap;
	},

	(dispatch) => ({
		componentWillMount: () => {
			// firebaseAuth.signOut();
			// return ;
			firebaseAuth.onAuthStateChanged((user) => {
				if (user) {
					console.log('以登入');
					dispatch(closeLogInModal());
				} else {
					console.log('以登出');
					dispatch(openLogInModal());
				}
			});
		},

		logIn: (email, password) => () => {
			dispatch(logInFireBase(email.trim(), password.trim()));
		},

		onChangeEmail: (event) => {
			dispatch(changeEmail({
				email: event.target.value
			}));
		},

		onChangePassword:(event) => {
			dispatch(changePassword({
				password: event.target.value
			}));
		},

		openModal: () => {
			dispatch(openLogInModal());
		},

		closeModal: () => {
			dispatch(closeLogInModal());
		}
	})
)(LogIn);
