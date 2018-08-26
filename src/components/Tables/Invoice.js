import React from 'react';

class Invoice extends React.Component {

	constructor(props) {
		super(props);
		this.largeSize = {
			flexBasis: '100%',
			textAlign: 'right',
			borderRight: '1px solid',
			boxSizing: 'border-box',
		};
		this.mediumSize = {
			flexBasis: '66%',
			textAlign: 'right',
			borderRight: '1px solid',
			boxSizing: 'border-box',
		};
		this.smallSize = {
			flexBasis: '33%',
			textAlign: 'right',
			borderRight: '1px solid',
			boxSizing: 'border-box',
		};
		this.size40 = {
			flexBasis: '40%',
			textAlign: 'right',
		};
		this.size20 = {
			flexBasis: '20%',
			textAlign: 'right',
		};
	}

	render() {
		const {invoiceChunk} = this.props;

		const dieselTotal = invoiceChunk.dieselTotal;
		const lubOilTotal = invoiceChunk.lubOilTotal;

		//四捨五入
		const dieselTotalUnitPriceExcludeTax = Math.round(dieselTotal.unitPriceExcludeTax * 100000) / 100000;
		const dieselTotalPriceExcludeTax = Math.round(dieselTotal.priceExcludeTax);

		const lubOilTotalUnitPriceExcludeTax = Math.round(lubOilTotal.unitPriceExcludeTax * 1000) / 1000;
		const lubOilTotalPriceExcludeTax = Math.round(lubOilTotal.priceExcludeTax);

		const totalPriceExcludedTax = invoiceChunk.totalPriceExcludedTax;
		const totalTax = invoiceChunk.totalTax;
		const totalPrice = invoiceChunk.totalPrice;

		return (
			<div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flexBasis: '5.5cm', border: '1px solid'}}>
				<div style={this.largeSize}>{invoiceChunk.companyName}</div>
				<div style={this.smallSize}>數量</div>
				<div style={this.smallSize}>單價</div>
				<div style={this.smallSize}>金額</div>
				<div style={this.smallSize}>{dieselTotal.count}</div>
				<div style={this.smallSize}>{dieselTotalUnitPriceExcludeTax}</div>
				<div style={this.smallSize}>{dieselTotalPriceExcludeTax}</div>
				<div style={this.smallSize}>{lubOilTotal.count}</div>
				<div style={this.smallSize}>{lubOilTotalUnitPriceExcludeTax}</div>
				<div style={this.smallSize}>{lubOilTotalPriceExcludeTax}</div>
				<div style={this.mediumSize}>總金額</div>
				<div style={this.smallSize}>{totalPriceExcludedTax}</div>
				<div style={this.mediumSize}>稅額</div>
				<div style={this.smallSize}>{totalTax}</div>
				<div style={this.mediumSize}>總計</div>
				<div style={this.smallSize}>{totalPrice}</div>
			</div>
		);
	}
}

export default Invoice;
