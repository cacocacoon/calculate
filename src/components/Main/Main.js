import React from 'react';
import LogInModal from '../../containers/Modals/LogIn';
import OperateModal from '../../containers/Modals/Operate';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{
					// <LogInModal />
					// // TODO: 1. ADD or MODIFY modal (d -> t)
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
