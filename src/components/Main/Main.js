import React from 'react';
import Media from 'react-media'
import HeaderBar from  '../../containers/HeaderBar/HeaderBar';
import LogInModal from '../../containers/Modals/LogIn';
import Plain from '../../containers/Plains/Plain';
import OperateModal from '../../containers/Modals/Operate';
import EditorModal from '../../containers/Modals/Editor';
import AddReminderButton from '../../containers/Button/AddReminder';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.A4Style = {
			height: '100%',
			width: '100%',
			boxShadow: '',
		};
	}

	render() {
		return (
			<Media query="print">
				{print => !print ? (
					<div>
						<HeaderBar />
						<LogInModal />
						<Plain />
						<OperateModal />
						<EditorModal />
						<AddReminderButton />
					</div>
				) : <Plain A4Style={this.A4Style} />
			}
		</Media>
	);
}
}

export default Main;

// {
// 	// 	<HeadBar />
// 	// 	<DataView />
// 	// 	<CreateTableButton />
// }
