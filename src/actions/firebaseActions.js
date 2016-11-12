import 'whatwg-fetch';
import firebaseAuth from '../firebase/auth';

import {
	enableLogInButton,
	disableLogInButton,
	closeLogInModal,
	changeEmail,
	changePassword,
} from '../actions/logInModalActions';

// NOTE: async action
export const logInFireBase = (email, password) => {
	return (dispatch) => {
		// NOTE: 要鎖住登入按鈕避免重複執行 DONE
		dispatch(disableLogInButton());
		firebaseAuth.signInWithEmailAndPassword(email, password)
			.then(user => {
				console.log('登入成功', user);
			})
			.catch(e => {
				console.log('帳號密碼錯誤', e);
			})
			.then(() => {
				// NOTE: 輸入框清空
				dispatch(changeEmail({email: ''}));
				dispatch(changePassword({password: ''}));
				// NOTE: 解開按鈕鎖 DONE
				dispatch(enableLogInButton());
			});

	}
}