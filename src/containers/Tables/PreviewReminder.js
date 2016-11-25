import {connect} from 'react-redux';
import PreviewReminderTable from '../../components/Tables/PreviewReminder';

import {
} from '../../actions';

export default connect(
	(state) => ({
		entities: state.getIn(['data', 'previewReminder', 'entities']).toJS(),
		totalPriceExcludedTax: state.getIn(['data', 'previewReminder', 'totalPriceExcludedTax']),
		totalTax: state.getIn(['data', 'previewReminder', 'totalTax']),
		totalPrice: state.getIn(['data', 'previewReminder', 'totalPrice']),
	}),

	(dispatch) => ({

	}),
)(PreviewReminderTable);
