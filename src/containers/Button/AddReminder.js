import {connect} from 'react-redux';
import AddReminderButton from '../../components/Button/AddReminder';

import {
	openReminderEditor,
	initOperateModalUi,
	initOperateModalData,
	openOperateModal,
} from '../../actions';

export default connect(
	state => ({}),
	(dispatch) => ({
		openEditor: (context) => () => {
			const data = context.store.getState().get('data').toJS();
			const reminderList = data.reminderList;

			// if reminderlist had loaded, when user clicked AddReminderButton.
			if(reminderList) {
				console.log('openEditor');
				dispatch(openReminderEditor());
			}
			else {
				console.log('先選擇要新增還是修改明細表');
				dispatch(initOperateModalUi());
				dispatch(initOperateModalData());
				dispatch(openOperateModal());
			}
		},
	}),
)(AddReminderButton);
