import React from 'react';

class PreviewReminder extends React.Component {


	constructor() {
		super();
		this.containerStyle = {
			display: 'flex',
			margin: '0 auto',
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
		};

		this.mediumCellStyle = {
			flexBasis: '15%',
			textAlign: 'center',
			border: '1px solid',
		};

		this.longCellStyle = {
			flexBasis: '85%',
			textAlign: 'center',
			border: '1px solid',
		};
	}

	componentDidUpdate() {
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const {
			entities,
			totalPriceExcludedTax,
			totalTax,
			totalPrice,
		} = this.props;

		// 沒有東西就不用render元件
		if(entities.length == 0) {
			return null;
		}

		return (
			<div style={this.containerStyle}>
				<div>
					<h1 style={{textAlign: 'center'}}>海有股份有限公司</h1>
					<h3 style={{margin: 0, textAlign: 'center'}}>請款明細表</h3>
				</div>
				<div style={{alignSelf: 'flex-start'}}>
					<h4>客戶名稱：Costco 好事多有限公司</h4>
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
					{
						entities.map((entity, index) => {
							const date = new Date(entity.date);
							entity.date = `${date.getMonth()}/${date.getDate()}`;
							entity.price = Math.round(entity.price);

							return (
								<div key={index} style={this.columnStyle}>
									<div style={this.smallCellStyle}>{index + 1}</div>
									<div style={this.smallCellStyle}>{entity.date}</div>
									<div style={this.mediumCellStyle}>{entity.productName}</div>
									<div style={this.mediumCellStyle}>{entity.count}</div>
									<div style={this.smallCellStyle}>{entity.unit}</div>
									<div style={this.smallCellStyle}>{entity.unitPrice}</div>
									<div style={this.mediumCellStyle}>{entity.price}</div>
									<div style={this.mediumCellStyle}>{entity.remark}</div>
								</div>
							);
						})
					}
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
