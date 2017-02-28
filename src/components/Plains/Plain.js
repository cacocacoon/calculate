import React from 'react';
import Paper from 'material-ui/Paper';
import PreviewReminderTable from '../../components/Tables/PreviewReminder';
import InvoiceTable from '../../components/Tables/Invoice';
class Plain extends React.Component {
	constructor(props) {
		super();
		this.reminderList = null;


		if(!props.A4Style) {
			//default setting
			this.A4Style = {
				minHeight: '29.7cm',
				width: '100%',
				maxWidth: '21cm',
				margin: '30px auto',
				padding: '1cm 1.5cm',
			};
		}
		else {
			this.A4Style = props.A4Style;
		}

		this.InvoiceTablesStyle = {
			pageBreakBefore: 'always',
		};
		this.InvoiceTablesStyle = Object.assign(this.InvoiceTablesStyle, this.A4Style);

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




		// 請款明細表
		const ReminderTables = () => {
			if(!this.reminderList || !reminderList.get('list')) {
				return <div style={this.textStyle}>{text}</div>;
			}

			let list = this.reminderList.list;

			let reminderArray = [];
			for(let [key, reminder] of Object.entries(list)) {
				reminderArray.push(
					<PreviewReminderTable
						key={key}
						companyName={reminder.companyName}
						entities={reminder.entities}
						totalPriceExcludedTax={reminder.totalPriceExcludedTax}
						totalTax={reminder.totalTax}
						totalPrice={reminder.totalPrice}
						previewMode={false}
						/>
				);
			}

			return (
				<div>
					{reminderArray}
				</div>
			);
		};

		// 列印單
		const InvoiceTables = () => {
			if(!this.reminderList || !reminderList.get('list')) {
				return null;
			}

			const tableStyle = {
				pageBreakInside: 'avoid',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'flex-start',
			};

			const list = this.reminderList.list;

			const invoiceArray = [];
			for(const [key, reminder] of Object.entries(list)) {
				invoiceArray.push(
					<InvoiceTable
						key={key}
						companyName={reminder.companyName}
						dieselTotal={reminder.dieselTotal}
						lubOilTotal={reminder.lubOilTotal}
						totalPriceExcludedTax={reminder.totalPriceExcludedTax}
						totalTax={reminder.totalTax}
						totalPrice={reminder.totalPrice}
					/>
				);
			}
			return (
				<div style={tableStyle}>
					{invoiceArray}
				</div>
			);
		};

		return (
			<div>
				<Paper style={this.A4Style} children={<ReminderTables />} zDepth={5} />
				<Paper style={this.InvoiceTablesStyle} children={<InvoiceTables />} zDepth={5} />
			</div>
		);
	}
}

export default Plain;
