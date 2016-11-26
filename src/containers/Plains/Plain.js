import {connect} from 'react-redux';
import Plain from '../../components/Plains/plain';

import {

} from '../../actions';

export default connect(
	(state) => ({
		reminderList: state.getIn(['data', 'reminderList']),
	}),

	(dispatch) => ({

	}),
)(Plain);
