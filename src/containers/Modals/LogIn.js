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
			// TODO: 1要找到對應的變數 DONE
			open: state.getIn(['ui', 'logInModalIsOpen']),
			enableLogInButton: state.getIn(['ui', 'logIn', 'enableLogInButton']),
			email: state.getIn(['data', 'logIn', 'email']),
			password: state.getIn(['data', 'logIn', 'password']),
		};

		return stateMap;
	},

	(dispatch) => ({
		// TODO: 這邊要測試會不會有modal跳出來又關閉的狀況 DONE
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

		// TODO:2 登入firebase, 需要email, password DONE
		// TODO: 抓到email, password 要 trim DONE
		logIn: (email, password) => () => {
			dispatch(logInFireBase(email.trim(), password.trim()));
		},
		// TODO: 輸入信箱的時候 DONE
		onChangeEmail: (event) => {
			dispatch(changeEmail({
				email: event.target.value
			}));
		},
		// TODO: 輸入密碼的時候 DONE
		onChangePassword:(event) => {
			dispatch(changePassword({
				password: event.target.value
			}));
		},
		// TODO: 打開登入方塊 test DONE
		openModal: () => {
			dispatch(openLogInModal());
		},
		// TODO: 關閉登入方塊 test DONE
		closeModal: () => {
			dispatch(closeLogInModal());
		}
	})
)(LogIn);
