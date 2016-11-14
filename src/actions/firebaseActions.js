import 'whatwg-fetch';
import firebaseAuth from '../firebase/auth';
import fbDatabase from '../firebase/database';

import {
	enableLogInButton,
	disableLogInButton,
	closeLogInModal,
	changeEmail,
	changePassword,
} from '../actions/logInModalActions';

import {
	setReminderListNameList,
} from '../actions/operateReminderList';

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

export const getReminderListNameListFromFirebase = () => (dispatch) => {
	const reminderListRef = fbDatabase.ref('reminderList');
	reminderListRef.on('value', (snapShot) => {
		const reminderList = snapShot.val();
		const reminderListNameList = Object.keys(reminderList);
		// console.log('reminderListNameList: ', reminderListNameList);
		dispatch(setReminderListNameList({reminderListNameList}));
	});
};
