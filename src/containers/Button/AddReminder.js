import {connect} from 'react-redux';
import AddReminderButton from '../../components/Button/AddReminder';

import {
	openReminderEditor,
} from '../../actions';

export default connect(
	(state) => ({

	}),

	(dispatch) => ({
		openEditor: () => {
			console.log('openEditor');
			dispatch(openReminderEditor());
		},
	}),
)(AddReminderButton);
