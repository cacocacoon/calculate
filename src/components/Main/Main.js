import React from 'react';
import LogInModal from '../../containers/Modals/LogIn';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<LogInModal />
		);
	}
}

export default Main;

// {
// 	// 	<HeadBar />
// 	// 	<DataView />
// 	// 	<CreateTableButton />
// }
