import {connect} from 'react-redux';
import HeaderBar from '../../components/HeaderBar/HeaderBar';

import {
	initOperateModalUi,
	initOperateModalData,
	openOperateModal,
} from '../../actions';

export default connect(
	(state) => ({
	}),

	(dispatch) => ({
		touchTapOperateButton: () => {
			// TODO: init operateModal
			dispatch(initOperateModalUi());
			dispatch(initOperateModalData());
			dispatch(openOperateModal());
		},
	}),
)(HeaderBar);
