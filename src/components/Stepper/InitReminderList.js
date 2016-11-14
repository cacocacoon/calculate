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

	render() {
		const {
			setOperatingType,
			goToStep,
			step,
			type,
			name,
			nameList,
			updateFetchInput,
			updateCreateInput,
			errorText,
			finish
		} = this.props;

		const finishButton = (
			<div style={{margin: '12px 0', display: 'flex', justifyContent: 'flex-end'}}>
				<RaisedButton
					label="完成"
					onClick={finish(name, nameList, type)}
					disableTouchRipple={true}
					disableFocusRipple={true}
					disabled={false}
					primary={true}
					onTouchTap={() => null}
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

		const ReminderListNameInputText = (props) => {
			switch (props.type) {
				case CREATE:
					return (
						<AutoComplete
							searchText={name}
							hintText="新增明細表"
							dataSource={[]}
							onBlur={updateCreateInput}
							errorText={errorText}
							/>
					);
				case FETCH:
					return (
						<AutoComplete
							searchText={name}
							hintText="搜尋明細表"
							dataSource={nameList}
							openOnFocus={true}
							onBlur={updateFetchInput}
							errorText={errorText}
							/>
					);
				default:
					return null;
			}
		};
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
							<ReminderListNameInputText type={type} />
							{finishButton}
						</StepContent>
					</Step>
				</Stepper>
			</div>
		);
	}
}

export default InitReminderList;
