import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LogIn extends React.Component {

	componentWillMount() {
		this.props.componentWillMount();
	}

	render() {
		const {
			open,
			enableLogInButton,
			logIn,
			email,
			password,
			onChangeEmail,
			onChangePassword,
			openModal,
			closeModal
		} = this.props;

		const actions = [
			<FlatButton
				label="取消"
				secondary={true}
				onTouchTap={closeModal}
				/>,
			<FlatButton
				label="登入"
				primary={true}
				disabled={!enableLogInButton}
				onTouchTap={logIn(email, password)}
				/>,
		];

		return (
			<div>
				<RaisedButton
					label="開啟登入方塊"
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
						value={email}
						onChange={onChangeEmail}
						/><br />
					<TextField
						hintText="XXXXXX"
						floatingLabelText="密碼"
						type="password"
						value={password}
						onChange={onChangePassword}
						/><br />
				</Dialog>
			</div>
		);
	}
}

export default LogIn;
