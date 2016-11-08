import {connect} from 'react-redux';
import LogIn from '../../components/Modals/LogIn';

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
			//  TODO: 1要找到對應的變數
			open: state.getIn(['ui', 'logInModalIsOpen']),
			email: state.getIn(['data', 'logIn', 'email']),
			password: state.getIn(['data', 'logIn', 'password'])
		};

		return stateMap;
	},

	(dispatch) => ({
		// TODO:2 登入firebase, 需要email, password
		// TODO: 抓到email, password 要 trim
		logIn: () => {
			dispatch(logInFireBase());
		},
		// TODO: 輸入信箱的時候
		onChangeEmail: (event) => {
			dispatch(changeEmail({
				email: event.target.value
			}));
		},
		// TODO: 輸入密碼的時候
		onChangePassword:(event) => {
			dispatch(changePassword({
				password: event.target.value
			}));
		},
		// TODO: 打開登入方塊 test
		openModal: () => {
			dispatch(openLogInModal());
		},
		// TODO: 關閉登入方塊 test
		closeModal: () => {
			dispatch(closeLogInModal());
		}
	})
)(LogIn);
