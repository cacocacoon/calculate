import {connect} from 'react-redux';
import PreviewReminderTable from '../../components/Tables/PreviewReminder';

import {
	setPreviewReminderCampanyName,
	setPreviewCompanyNameInputErrorText,
} from '../../actions';

export default connect(
	(state) => ({
		entities: state.getIn(['data', 'previewReminder', 'entities']).toJS(),
		totalPriceExcludedTax: state.getIn(['data', 'previewReminder', 'totalPriceExcludedTax']),
		totalTax: state.getIn(['data', 'previewReminder', 'totalTax']),
		totalPrice: state.getIn(['data', 'previewReminder', 'totalPrice']),
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
