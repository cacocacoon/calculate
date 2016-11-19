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
		componentWillMount: (open = true) => {
			// firebaseAuth.signOut();
			// return ;
			firebaseAuth.onAuthStateChanged((user) => {
				if (user && open) {// 已登入, 且 modal 是打開的狀態才要關掉 modal
						dispatch(closeLogInModal());
						console.log('已登入: ', user.email);
				}
				if(!user && !open) {// 未登入, 且 modal 是沒打開的才要開啟 modal
					dispatch(openLogInModal());
					console.log('已登出');
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
