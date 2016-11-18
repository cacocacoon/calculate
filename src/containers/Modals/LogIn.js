import {connect} from 'react-redux';
import LogIn from '../../components/Modals/LogIn';
import firebaseAuth from '../../firebase/auth';

import {
	closeLogInModal,
	openLogInModal,
	changeEmail,
	changePassword,
	logInFireBase,
	initOperateModalUi,
	initOperateModalData,
	openOperateModal,
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
					console.log('已登入: ', user.email);
					dispatch(closeLogInModal());
				} else {
					console.log('已登出');
					dispatch(openLogInModal());
				}
			});
		},

		logIn: (email, password) => () => {
			dispatch(logInFireBase(email.trim(), password.trim()));
			// TODO: 初始化 operate modal
			dispatch(initOperateModalUi());
			dispatch(initOperateModalData());
			dispatch(openOperateModal());
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
