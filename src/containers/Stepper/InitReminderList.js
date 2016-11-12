import {connect} from 'react-redux';
import InitReminderListStepper from '../../components/Stepper/InitReminderList';

import {
	goOperatingStep,
	setOperatingType,
} from '../../actions';

export default connect(
	(state) => ({
		type: state.getIn(['data', 'operateReminderList', 'type']),
		step: state.getIn(['ui', 'operateReminderList', 'step'])
	}),

	(dispatch) => ({
		goToStep: (step) => () => {
			dispatch(goOperatingStep({step}));
		},

		setOperatingType: (type) => () => {
			dispatch(setOperatingType({type}));
			dispatch(goOperatingStep({step: 1}));
		}
	}),
)(InitReminderListStepper);
