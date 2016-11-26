import React from 'react';
import HeaderBar from  '../../containers/HeaderBar/HeaderBar';
import LogInModal from '../../containers/Modals/LogIn';
import Plain from '../../containers/Plains/Plain';
import OperateModal from '../../containers/Modals/Operate';
import EditorModal from '../../containers/Modals/Editor';
import AddReminderButton from '../../containers/Button/AddReminder';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<HeaderBar />
				<LogInModal />
				{
					// TODO: 1. ADD or MODIFY modal (d -> t)
					// 甚麼時候該跳出 Operate Modal
					// 1. 登入成功之後
					// 2. 按下 header 上的操作鈕之後
					// Operate Modal 跳出來時先初始化
				}
				<Plain />
				<OperateModal />
				<EditorModal />
				<AddReminderButton />
			</div>
		);
	}
}

export default Main;

// {
// 	// 	<HeadBar />
// 	// 	<DataView />
// 	// 	<CreateTableButton />
// }
