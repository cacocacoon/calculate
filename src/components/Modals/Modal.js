import React from 'react';
import Dialog from 'material-ui/Dialog';

class Modal extends React.Component {



	render() {
		// title(string): modal title
		// actions(array): modal 下方要放的元件
		// open(boolean): 控制 modal 是否開啟的變數
		// contentStyle(object): modal content style
		// children(array): 外層傳進來的 Component
		const {
			title,
			actions,
			open,
			modal,
			contentStyle,
			titleStyle,
			bodyStyle,
			children,
			onRequestClose,
		} = this.props;

		return (
			<div>
				<Dialog
					title={title}
					actions={actions}
					autoScrollBodyContent={true}
					modal={modal}
					open={open}
					titleStyle={titleStyle}
					contentStyle={contentStyle}
					onRequestClose={onRequestClose}
					>
					{children}
				</Dialog>
			</div>
		);
	}
}

export default Modal;
