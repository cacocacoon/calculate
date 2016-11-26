import React from 'react';
import Modal from './Modal';
import FlatButton from 'material-ui/FlatButton';
import CreateEntityPanel from '../../containers/Panels/CreateEntity';
import PreviewReminderTable from '../../containers/Tables/PreviewReminder';
import Divider from 'material-ui/Divider';
class Editor extends React.Component {
	constructor() {
		super();
	}

	render() {
		const {
			open,
			save,
			enableSaveButton,
		} = this.props;

		const SaveButton = (props, context) => (
			<FlatButton
				label="儲存"
				primary={true}
				disabled={!enableSaveButton}
				onTouchTap={save(context)}
				/>
		);

		SaveButton.contextTypes = {
			store: React.PropTypes.object,
		};

		return (
			<Modal
				title="編輯器"
				actions={[<CreateEntityPanel />, <SaveButton />]}
				open={open}
				contentStyle={{overflow: 'auto', width: '800px', maxWidth: '800px', maxHeight: '100%'}}
				>
				{
				}
				<PreviewReminderTable />
				<Divider />

			</Modal>
		);
	}
}

export default Editor;
