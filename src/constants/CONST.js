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
