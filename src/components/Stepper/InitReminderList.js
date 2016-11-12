import React from 'react';
import {
	Step,
	Stepper,
	StepButton,
	StepContent,
} from 'material-ui/Stepper';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import {OPERATE_REMINDER_LIST} from '../../constants/CONST';

/**
* A basic vertical non-linear implementation
*/

const STEP_1 = 'STEP_1';
const STEP_2 = 'STEP_2';

const CREATE = OPERATE_REMINDER_LIST.getIn(['TYPE', 'CREATE']);
const FETCH = OPERATE_REMINDER_LIST.getIn(['TYPE', 'FETCH']);
class InitReminderList extends React.Component {

	// constructor() {
	// 	super();
	// 	this.state = {
	// 		stepIndex: 0,
	// 	}
	// }

	// handleNext() {
	// 	const {stepIndex} = this.state;
	// 	if (stepIndex < 2) {
	// 		this.setState({stepIndex: stepIndex + 1});
	// 	}
	// };
	//
	// handlePrev() {
	// 	const {stepIndex} = this.state;
	// 	if (stepIndex > 0) {
	// 		this.setState({stepIndex: stepIndex - 1});
	// 	}
	// };

	render() {
		const {
			setOperatingType,
			goToStep,
			step,
			type,
		} = this.props;

		const finishButton = (
			<div style={{margin: '12px 0', display: 'flex', justifyContent: 'flex-end'}}>
				<RaisedButton
					label="完成"
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={handleNext}
					style={{marginRight: 12}}
					/>
			</div>
		);

		const CreateReminderListButton = () => (
			<Chip onTouchTap={setOperatingType(CREATE)} style={{width: '110px', justifyContent: 'center'}}>
				新增
			</Chip>
		);

		const FetchReminderListButton = () => (
			<Chip onTouchTap={setOperatingType(FETCH)} style={{width: '110px', justifyContent: 'center'}}>
				搜尋
			</Chip>
		);

		return (
			<div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
				<Stepper
					activeStep={step}
					linear={true}
					orientation="vertical"
					>
					<Step>
						<StepButton onTouchTap={goToStep(0)}>
							明細表
						</StepButton>
						<StepContent>
							<p>在此您可以選擇新增或搜尋明細表</p>
							<div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '1em 0'}}>
								<CreateReminderListButton />
								<FetchReminderListButton />
							</div>
						</StepContent>
					</Step>
					<Step>
						<StepButton>
							輸入名稱
						</StepButton>
						<StepContent>
							<AutoComplete
								hintText="XX有限公司"
								dataSource={getDataSource()}
								onUpdateInput={() => null}
								errorText={null}
								/>
							{finishButton}
						</StepContent>
					</Step>
				</Stepper>
			</div>
		);
	}
}

export default InitReminderList;
