import React from 'react';
import createFragment from 'react-addons-create-fragment';
import TextField from 'material-ui/TextField';

class Invoice extends React.Component {

	constructor() {
		super();
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

	componentDidUpdate() {
	}

	render() {
		let {
			companyName,
			dieselTotal,
			lubOilTotal,
			totalPriceExcludedTax,
			totalTax,
			totalPrice,
		} = this.props;

		// 沒有東西就不用render元件
		// if(false) {
		// 	return <div></div>;
		// }

		//四捨五入
		dieselTotal.unitPriceExcludeTax = Math.round(dieselTotal.unitPriceExcludeTax * 100000) / 100000;
		dieselTotal.priceExcludeTax = Math.round(dieselTotal.priceExcludeTax);

		lubOilTotal.unitPriceExcludeTax = Math.round(lubOilTotal.unitPriceExcludeTax * 1000) / 1000;
		lubOilTotal.priceExcludeTax = Math.round(lubOilTotal.priceExcludeTax);

		totalPriceExcludedTax = Math.round(totalPriceExcludedTax);
		totalTax = Math.round(totalTax);
		totalPrice = Math.round(totalPrice);

		return (
			<div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', flexBasis: '5.5cm', border: '1px solid'}}>
				<div style={this.largeSize}>{companyName}</div>
				<div style={this.smallSize}>數量</div>
				<div style={this.smallSize}>單價</div>
				<div style={this.smallSize}>金額</div>
				<div style={this.smallSize}>{dieselTotal.count}</div>
				<div style={this.smallSize}>{dieselTotal.unitPriceExcludeTax}</div>
				<div style={this.smallSize}>{dieselTotal.priceExcludeTax}</div>
				<div style={this.smallSize}>{lubOilTotal.count}</div>
				<div style={this.smallSize}>{lubOilTotal.unitPriceExcludeTax}</div>
				<div style={this.smallSize}>{lubOilTotal.priceExcludeTax}</div>
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
