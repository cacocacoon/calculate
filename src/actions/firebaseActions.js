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
	setPreviewCompanyNameInputErrorText,

	initOperateModalUi,
	initOperateModalData,
	openOperateModal,
} from '../actions';

// NOTE: async action
export const logInFireBase = (email, password) => {
	return (dispatch) => {
		// NOTE: 要鎖住登入按鈕避免重複執行 DONE
		dispatch(disableLogInButton());
		firebaseAuth.signInWithEmailAndPassword(email, password)
			.then(user => {
				console.log('登入成功', user);
				// TODO: 初始化 operate modal
				dispatch(initOperateModalUi());
				dispatch(initOperateModalData());
				dispatch(openOperateModal());
				dispatch(closeLogInModal());
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
let reminderListRef = null;

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
		throw new Error('輸入名稱不正確(這個問題目前還不重要，但要記得回來解決)');
	}
	const emptyReminderList = {
		name,
		// list: 'empty',
	};
	reminderListRef = reminderListTableRef.child(name);
	reminderListRef.set(emptyReminderList)
	.then(() => {
		console.log(`在 firebase 新增成功: reminderList.${reminderListRef.key}`, emptyReminderList);
		keepSyncingReminderList(dispatch, reminderListRef);
	})
	.catch((error) => {
		throw new Error(`在firebase新增失敗: reminderList.${name}`);
	});
};


export const fetchReminderList = (name = '') => (dispatch) => {
	if(Boolean((typeof name === "string") && !name)) {
		throw new Error('輸入名稱不正確');
	}

	reminderListRef = reminderListTableRef.child(name);
	keepSyncingReminderList(dispatch, reminderListRef);
};

export const pushNewReminder = (newReminder = null) => (dispatch) => {
	if(!reminderListRef) {
		console.log('還沒有選取要新增還是修改明細表');
		return ;
	}

	if(!newReminder) {
		console.log('要推上去到firebase的reminder是沒有東西的');
		return ;
	}

	newReminder.companyName = newReminder.companyName.trim();
	if(!newReminder.companyName) {
		throw setPreviewCompanyNameInputErrorText({errorText: '輸入公司名稱'}) ;
	}

	reminderListRef.child('list').push(newReminder)
		.then(() => {
			console.log(`推送到 firebase reminderList.${reminderListRef.key} 成功`);
		})
		.catch(() => {
			console.log(`推送到 firebase reminderList.${reminderListRef.key} 失敗`);
		});
}

// state裡面的reminderlist 和 firebase 裡的 reminderlist 保持同步
const keepSyncingReminderList = (dispatch, reminderListRef) => {
	// 當 firebase ref 上有檔案更動，便會執行下面
	reminderListRef.on('value', (snapShot) => {
		const reminderList = snapShot.val();
		if(!reminderList) {
			throw new Error(`與 firebase reminderList.${reminderListRef.key} 同步失敗`);
		}

		dispatch(setReminderList(reminderList));
		console.log(`與 firebase reminderList.${reminderListRef.key} 同步成功`);
	});
}
