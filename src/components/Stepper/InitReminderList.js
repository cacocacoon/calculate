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


const CREATE = OPERATE_REMINDER_LIST.getIn(['TYPE', 'CREATE']);
const FETCH = OPERATE_REMINDER_LIST.getIn(['TYPE', 'FETCH']);
class InitReminderList extends React.Component {

	constructor() {
		super();
		this.state = {
			temp_name: '',
		}
		this.updateTemp_Name = this.updateTemp_Name.bind(this);
	}

	updateTemp_Name(inputText) {
		this.setState({temp_name: inputText});
	}

	render() {
		const {
			setOperatingType,
			goToStep,
			step,
			type,
			name,
			nameList,
			setInputName,
			errorText,
			finish
		} = this.props;

		const FinishButton = (props) => (
			<div style={{margin: '12px 0', display: 'flex', justifyContent: 'flex-end'}}>
				<RaisedButton
					label="完成"
					disableTouchRipple={true}
					disableFocusRipple={true}
					disabled={false}
					primary={true}
					onTouchTap={finish(props.tempName, nameList, type)}
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
							{type == CREATE &&
								<AutoComplete
									key={type}
									hintText="新增明細表"
									searchText={this.state.temp_name}
									dataSource={[]}
									onUpdateInput={this.updateTemp_Name}
									onNewRequest={this.updateTemp_Name}
									errorText={errorText}
									/>
							}
							{type == FETCH &&
								<AutoComplete
									key={type}
									hintText="搜尋明細表"
									searchText={this.state.temp_name}
									dataSource={nameList}
									onUpdateInput={this.updateTemp_Name}
									onNewRequest={this.updateTemp_Name}
									errorText={errorText}
									/>
							}
							<FinishButton tempName={this.state.temp_name} />
						</StepContent>
					</Step>
				</Stepper>
			</div>
		);
	}
}

export default InitReminderList;
