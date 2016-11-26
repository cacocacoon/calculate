import {connect} from 'react-redux';
import EditorModal from '../../components/Modals/Editor';
import {INIT_REMINDER} from '../../constants/CONST';

import {
	pushNewReminder,
	setPreviewReminder,
	closeReminderEditor,
} from '../../actions';

export default connect(
	(state) => ({
		open: state.getIn(['ui', 'reminderEditor', 'open']),
		enableSaveButton: state.getIn(['data', 'previewReminder', 'entities']).size > 0,
	}),

	(dispatch) => ({
		save: (context) => () => {
			const data = context.store.getState().get('data').toJS();
			const previewReminder = data.previewReminder;

			dispatch(pushNewReminder(previewReminder));
			dispatch(setPreviewReminder({previewReminder: INIT_REMINDER}));
			dispatch(closeReminderEditor());
		},
	}),
)(EditorModal);
