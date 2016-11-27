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
			closeEditorModal,
			enableSaveButton,
			cleanPreviewReminder,
		} = this.props;

		const SaveButton = (props, context) => (
			<FlatButton
				label="儲存"
				primary={true}
				disabled={!enableSaveButton}
				onTouchTap={save(context)}
				/>
		);

		const CloseButton = () => (
			<FlatButton
				label="關閉"
				secondary={true}
				onTouchTap={closeEditorModal}
				/>
		);

		const CleanButton = () => (
			<FlatButton
				label="清除"
				secondary={true}
				style={{float: 'left'}}
				onTouchTap={cleanPreviewReminder}
				/>
		);

		SaveButton.contextTypes = {
			store: React.PropTypes.object,
		};

		return (
			<Modal
				title="編輯器"
				titleStyle={{padding: '12px 25px 12px', borderBottom: '0px'}}
				open={open}
				modal={false}
				onRequestClose={closeEditorModal}
				contentStyle={{width: '800px', maxWidth: '800px'}}
				actions={[<CreateEntityPanel />, <CleanButton />, <CloseButton />, <SaveButton />]}
				actionsContainerStyle={{display: 'static', bottom: 0}}
				>
				<PreviewReminderTable />
			</Modal>
		);
	}
}

export default Editor;
