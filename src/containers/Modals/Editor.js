import {connect} from 'react-redux';
import EditorModal from '../../components/Modals/Editor';

import {
} from '../../actions';

export default connect(
	(state) => ({
		open: state.getIn(['ui', 'reminderEditor', 'open']),
	}),

	(dispatch) => ({
	}),
)(EditorModal);
