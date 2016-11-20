import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Button extends Component {

	render() {
		const {
			openEditor
		} = this.props;

		return (
			<div>
				<FloatingActionButton
					secondary={true}
					style={{position: 'fixed', bottom: '20px', right: '20px'}}
					onTouchTap={openEditor}
					>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		);
	}
}

export default Button;
