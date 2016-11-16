// TODO: 2. 新增 operate container (d)
import { connect } from 'react-redux';
import Operate from '../../components/Modals/Operate';
// TODO: 3. import actions (d)
import {
} from '../../actions';

export default connect(
	(state) => ({
		open: state.getIn(['ui', 'operateReminderList', 'open']),
	}),
)(Operate);
