import React from 'react';
import Dialog from 'material-ui/Dialog';
import InitReminderListStepper from '../../containers/Stepper/InitReminderList';

class Operate extends React.Component {

	render() {
		const {
			open,
			closeOperateModal,
		} = this.props;

		// TODO: add stepper
		// let InitReminderStepper = [];
		return (
			<div>
				<Dialog
					title="操作明細表"
					modal={false}
					open={open}
					onRequestClose={closeOperateModal}
					contentStyle={{width: '375px'}}
					>
					<InitReminderListStepper />
				</Dialog>
			</div>
		);
	}
}

export default Operate;
