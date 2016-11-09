import 'whatwg-fetch';
import firebaseAuth from '../firebase/auth';

import {
	enableLogInButton,
	disableLogInButton,
	closeLogInModal,
	changeEmail,
	changePassword,
} from '../actions/logInModalActions';

// TODO: 製作async action DONE
export const logInFireBase = (email, password) => {
	return (dispatch) => {
		// TODO: 要鎖住登入按鈕避免重複執行 DONE
		dispatch(disableLogInButton());
		firebaseAuth.signInWithEmailAndPassword(email, password)
			.then(user => {
				console.log('登入成功', user);
			})
			.catch(e => {
				console.log('帳號密碼錯誤', e);
			})
			.then(() => {
				// TODO: 要確認登入結束登入後輸入框有沒有清空 DONE
				dispatch(changeEmail({email: ''}));
				dispatch(changePassword({password: ''}));
				// TODO: 結束登入後，解開按鈕鎖 DONE
				dispatch(enableLogInButton());
			});

	}
}
