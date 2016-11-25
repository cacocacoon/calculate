import {connect} from 'react-redux';
import EditorModal from '../../components/Modals/Editor';

import {
	pushNewReminder,
} from '../../actions';

export default connect(
	(state) => ({
		open: state.getIn(['ui', 'reminderEditor', 'open']),
		enableSaveButton: true,
	}),

	(dispatch) => ({
		save: (context) => () => {
			// if(!previewReminder || previewReminder.length == 0) {
			// 	console.log('還沒輸入');
			// }
			const data = context.store.getState().get('data').toJS();
			const previewReminder = data.previewReminder;
			const reminderList = data.reminderList;
			if(!reminderList) {
				console.log('請新增或搜尋明細表');
				return;
			}

			dispatch(pushNewReminder({newReminder: previewReminder, reminderList}));
			console.log('store: ', store.getState().toJS());
		},
	}),
)(EditorModal);
