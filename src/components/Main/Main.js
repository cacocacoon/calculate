import React from 'react';
import LogInModal from '../../containers/Modals/LogIn';
import OperateModal from '../../containers/Modals/Operate';
import HeaderBar from  '../../components/HeaderBar/HeaderBar'

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
				<OperateModal />
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
