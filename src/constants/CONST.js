import Immutable from 'immutable';

export const OPERATE_REMINDER_LIST = Immutable.fromJS({
	TYPE: {
		CREATE: 'CREATE',
		FETCH: 'FETCH',
	}
});

export const STEPPER_INIT_STATE = Immutable.fromJS({
	UI: {
		open: false,
		step: 0,
	},
	DATA: {
		type: '',
		name: '',
		nameList: [],
		errorText: '',
	}
});

export const ENTITY = Immutable.fromJS({
	//商品類型
	TYPE: {
		DIESEL: '超級柴油',
		LUB_OIL: '潤滑油'
	}
});

export const INIT_CREATE_ENTITY = Immutable.fromJS({
	type: {
		value: ENTITY.getIn(['TYPE', 'DIESEL']),
		// errorText: ''
	},
	date: {
		value: '2016/1/1',
		// errorText: '',
	},
	productName: {
		value: '超級柴油',
		// errorText: '',
	},
	count: {
		value: '132',
		// errorText: '',
	},
	unit: {
		value: 'L',
		// errorText: '',
	},
	unitPrice: {
		value: '12',
		// errorText: '',
	},
	remark: {
		value: 'swdfe',
		// errorText: '',
	},
});

export const INIT_REMINDER = Immutable.fromJS({
	companyName: '',
	dieselTotal: {
		count: 0,
		unitPriceExcludeTax: 0.0,
		priceExcludeTax: 0.0,
		priceIncludeTax: 0.0,
	},
	lubOilTotal: {
		count: 0,
		unitPriceExcludeTax: 0.0,
		priceExcludeTax: 0.0,
		priceIncludeTax: 0.0,
	},
	totalPriceExcludedTax: 0.0,
	totalTax: 0,
	totalPrice: 0,
	entities: [],
});
