import React from 'react';
import Paper from 'material-ui/Paper';
import PreviewReminderTable from '../../components/Tables/PreviewReminder';

class Plain extends React.Component {
	constructor(props) {
		super();
		this.reminderList = null;

		this.A4Style = {
			minHeight: '29.7cm',
			width: ' 21cm',
			margin: '30px auto',
			padding: '1cm 1.5cm',
		};

		this.textStyle = {
			marginTop: '70px',
			textAlign: 'center',
			fontSize: '45px',
			fontWeight: 'bold',
			color: 'gray',
		};
	}



	render() {

		const {
			reminderList
		} = this.props;

		let text = '';

		if(!reminderList) {
			text = '請點擊右上角 操作';
		}
		else if(!reminderList.get('list')) {
			text = '請點擊右下角 +';
		}
		else {
			this.reminderList = reminderList.toJS();
		}




		const Children = () => {
			if(!this.reminderList || !reminderList.get('list')) {
				return <div style={this.textStyle}>{text}</div>;
			}

			let array = [];
			let list = this.reminderList.list;
			for(let [key, reminder] of Object.entries(list)) {
				array.push(
					<PreviewReminderTable
						companyName="costco"
						entities={reminder.entities}
						totalPriceExcludedTax={reminder.totalPriceExcludedTax}
						totalTax={reminder.totalTax}
						totalPrice={reminder.totalPrice}
						/>
				);
			}

			return (
				<div>
					{array}
				</div>
			);
		};

		return (
			<div>
				<Paper style={this.A4Style} children={<Children />} zDepth={5} />
			</div>
		);
	}
}

export default Plain;
