import React from 'react';
import TextField from 'material-ui/TextField';

class PreviewReminder extends React.Component {

	constructor() {
		super();
		this.containerStyle = {
			display: 'flex',
			margin: '0 auto 0.6cm',
			width: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			pageBreakInside: 'avoid',
		};

		this.tableStyle = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			borderStyle: 'double',
		};

		this.columnStyle ={
			display: 'flex',
			flexBasis: '30px',
		};

		this.smallCellStyle = {
			flexBasis: '10%',
			textAlign: 'center',
			border: '1px solid',
			lineHeight: '30px'
		};

		this.mediumCellStyle = {
			flexBasis: '15%',
			textAlign: 'center',
			border: '1px solid',
			lineHeight: '30px'
		};

		this.longCellStyle = {
			flexBasis: '85%',
			textAlign: 'center',
			border: '1px solid',
			lineHeight: '30px'
		};
	}

	componentDidUpdate() {
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const {
			previewMode,
			setCompanyName,
			previewReminder,
			companyNameInputErrorText,
		} = this.props;

		const entities = previewReminder.entities;
		const companyName = previewReminder.companyName;
		const totalPriceExcludedTax = previewReminder.totalPriceExcludedTax;
		const totalTax = previewReminder.totalTax;
		const totalPrice = previewReminder.totalPrice;

		// 沒有東西就不用render元件
		if(entities.length == 0) {
			const textStyle = {
				textAlign: 'center',
				marginTop: '18px',
				fontSize: '25px',
				fontWeight: 'bold',
				color: 'lightgrey',
			};
			return <div style={textStyle}>Empty</div>;
		}

		return (
			<div style={this.containerStyle}>
				<div>
					<h1 style={{textAlign: 'center', marginBottom: '0.1cm'}}>海有股份有限公司</h1>
					<h3 style={{margin: 0, textAlign: 'center'}}>請款明細表</h3>
				</div>
				<div key={previewMode} style={{alignSelf: 'flex-start'}}>
					{
						// <CompanyNameElement key={previewMode} previewMode={previewMode} />
						previewMode ? (
							<div key={previewMode}>客戶名稱：<TextField id="company-name-input" onChange={setCompanyName} errorText={companyNameInputErrorText} /></div>
						) : (
							<h4 key={previewMode} style={{margin: '0.3cm 0'}}>客戶名稱：{companyName}</h4>
						)
					}
				</div>
				<div style={this.tableStyle}>
					<div style={this.columnStyle}>
						<div style={this.smallCellStyle}>#</div>
						<div style={this.smallCellStyle}>日期</div>
						<div style={this.mediumCellStyle}>品名</div>
						<div style={this.mediumCellStyle}>數量</div>
						<div style={this.smallCellStyle}>單位</div>
						<div style={this.smallCellStyle}>單價</div>
						<div style={this.mediumCellStyle}>金額</div>
						<div style={this.mediumCellStyle}>備註</div>
					</div>
					{entities.map((entity, index) => {
						const date = new Date(entity.date);

						return (
							<div key={index} style={this.columnStyle}>
								<div style={this.smallCellStyle}>{index + 1}</div>
								<div style={this.smallCellStyle}>{`${date.getMonth() + 1}/${date.getDate()}`}</div>
								<div style={this.mediumCellStyle}>{entity.productName}</div>
								<div style={this.mediumCellStyle}>{entity.count}</div>
								<div style={this.smallCellStyle}>{entity.unit}</div>
								<div style={this.smallCellStyle}>{entity.unitPrice}</div>
								<div style={this.mediumCellStyle}>{Math.round(entity.price)}</div>
								<div style={this.mediumCellStyle}>{entity.remark}</div>
							</div>
						);
					})}
					<div style={this.columnStyle}>
						<div style={this.longCellStyle}>銷售總金額</div>
						<div style={this.mediumCellStyle}>{totalPriceExcludedTax}</div>
					</div>
					<div style={this.columnStyle}>
						<div style={this.longCellStyle}>稅額</div>
						<div style={this.mediumCellStyle}>{totalTax}</div>
					</div>
					<div style={this.columnStyle}>
						<div style={this.longCellStyle}>總計</div>
						<div style={this.mediumCellStyle}>{totalPrice}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PreviewReminder;
