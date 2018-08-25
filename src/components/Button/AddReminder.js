import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddReminderButton extends Component {

	render() {
		const {
			openEditor
		} = this.props;

		return (
			<div>
				<FloatingActionButton
					secondary={true}
					style={{position: 'fixed', bottom: '20px', right: '20px'}}
					onTouchTap={openEditor(this.context)}
				>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		);
	}
}

AddReminderButton.contextTypes = {
	store: React.PropTypes.object
};

export default AddReminderButton;
