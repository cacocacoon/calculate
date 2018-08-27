import {connect} from 'react-redux';
import {BillingReminder} from '../../constants/dataStructure';
import PreviewReminderTable from '../../components/Tables/PreviewReminder';

import {
	setPreviewReminderCampanyName,
	setPreviewCompanyNameInputErrorText,
} from '../../actions';

export default connect(
	(state) => ({
		previewReminder: new BillingReminder(state.getIn(['data', 'previewReminder']).toJS()),
		previewMode: true,
		companyNameInputErrorText: state.getIn(['ui', 'previewReminder', 'companyNameInputErrorText']),
	}),

	(dispatch) => ({
		setCompanyName: (event) => {
			let name = event.target.value;
			dispatch(setPreviewReminderCampanyName({name}));
			dispatch(setPreviewCompanyNameInputErrorText({errorText: ''}));
		}
	}),
)(PreviewReminderTable);
