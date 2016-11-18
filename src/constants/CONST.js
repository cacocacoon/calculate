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
