import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import InitReminderListStepper from '../../containers/Stepper/InitReminderList';

class Operate extends React.Component {

	render() {
		const {
		} = this.props;

		// TODO: add stepper
		// let InitReminderStepper = [];
		return (
			<div>
			{

				// <RaisedButton
				// 	label="新增或修改明細表"
				// 	onTouchTap={openModal}
				// 	/>
			}
				<Dialog
					title="操作明細表"
					modal={true}
					open={true}
					contentStyle={{width: '375px'}}
					>
					<InitReminderListStepper />
				</Dialog>
			</div>
		);
	}
}

export default Operate;
