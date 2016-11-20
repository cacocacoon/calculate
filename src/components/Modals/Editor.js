import React from 'react';
import Divider from 'material-ui/Divider';
import Modal from './Modal';
import CreateEntityPanel from '../../containers/Panels/CreateEntity';
class Editor extends React.Component {

	render() {
		const {
			open,
		} = this.props;

		return (
			<Modal
				title="編輯器"
				actions={[]}
				open={open}
				contentStyle={{width: '800px'}}
				>
				{
					//<PreviewReminder>
				}
				<Divider />
				<CreateEntityPanel />
			</Modal>
		);
	}
}

export default Editor;
