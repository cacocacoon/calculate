import React from 'react';
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
				<CreateEntityPanel />
			</Modal>
		);
	}
}

export default Editor;
