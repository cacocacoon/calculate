import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class HeaderBar extends Component {

	render() {

		const {
			touchTapOperateButton,
		} = this.props;

		return (
			<div id="header-bar">
				<AppBar
					title="開發票工具"
					titleStyle={{display: 'flex', justifyContent: 'center'}}
					iconStyleLeft={{display: 'none'}}
					iconElementRight={<FlatButton label="操作" onTouchTap={touchTapOperateButton} />}
				/>
			</div>
		);
	}
}

export default HeaderBar;
