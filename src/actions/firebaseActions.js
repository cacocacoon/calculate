import 'whatwg-fetch';
import firebaseAuth from '../firebase/auth';
import fbDatabase from '../firebase/database';

import {
	enableLogInButton,
	disableLogInButton,
	closeLogInModal,
	changeEmail,
	changePassword,

	setReminderListNameList,
	setReminderList,
} from '../actions';

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

const reminderListTableRef = fbDatabase.ref('reminderListTable');

export const getReminderListNameListFromFirebase = () => (dispatch) => {
	reminderListTableRef.on('value', (snapShot) => {
		const reminderListTable = snapShot.val();
		if(!reminderListTable) {
			throw new Error('在firebase抓取 reminderListTable 失敗');
		}
		const reminderListNameList = Object.keys(reminderListTable);
		dispatch(setReminderListNameList({reminderListNameList}));
	});
};

export const createReminderList = (name = '') => (dispatch) => {
	if(Boolean((typeof name === "string") && !name)) {
		throw new Error('輸入名稱不正確');
	}
	const emptyReminderList = {
		name,
		// list: 'empty',
	};
	const reminderListRef = reminderListTableRef.child(name);
	reminderListRef.set(emptyReminderList)
	.then(() => {
		console.log('在firebase新增檔案成功: ', emptyReminderList);
		// 監聽 firebase 上 reminderlist 任何變動
		listenToRefOnChildChanged(reminderListRef);
		console.log('開始監聽明細表任何變動');
		// dispatch(setReminderList(emptyReminderList));
	})
	.catch((error) => {
		throw new Error('在firebase新增檔案失敗');
	});


};

export const fetchReminderList = (name = '') => (dispatch) => {
	if(Boolean((typeof name === "string") && !name)) {
		throw new Error('輸入名稱不正確');
	}
	const reminderListRef = reminderListTableRef.child(name);
	reminderListRef.once('value', (snapShot) => {
		const reminderList = snapShot.val();
		if(!reminderList) {
			throw new Error('在firebase抓取檔案失敗');
		}
		console.log('在firebase抓取檔案成功: ', reminderList);

		console.log('開始監聽明細表任何變動');
		dispatch(setReminderList(reminderList));
	});
};

export const pushNewReminder = ({newReminder, reminderList}) => (dispatch) => {
	if(!newReminder) {
		throw new Error('can not find new reminder.');
	}

	const reminderListRef = reminderListTableRef.child(reminderList.name);
	reminderListRef.child('list').push(newReminder);
}
