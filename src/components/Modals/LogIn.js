import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
/**
* A modal dialog can only be closed by selecting one of the actions.
*/
const LogIn = ({
	open,
	logIn,
	onChangeEmail,
	onChangePassword,
	openModal,
	closeModal
}) => {
	const actions = [
		<FlatButton
			label="取消"
			secondary={true}
			onTouchTap={closeModal}
			/>,
		<FlatButton
			label="登入"
			primary={true}
			onTouchTap={logIn}
			/>,
	];

	return (
		<div>
			<RaisedButton
				label="Modal Dialog"
				onTouchTap={openModal}
				/>
			<Dialog
				title="登入"
				actions={actions}
				modal={true}
				open={open}
				contentStyle={{width: '25%'}}
				>
					<TextField
						hintText="luke@ppt.cc"
						floatingLabelText="信箱"
						onChange={onChangeEmail}
						/><br />
					<TextField
						hintText="XXXXXX"
						floatingLabelText="密碼"
						type="password"
						onChange={onChangePassword}
						/><br />
			</Dialog>
		</div>
	);
}

export default LogIn;
