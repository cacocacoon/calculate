import {connect} from 'react-redux';
import CreateEntityPanel from '../../components/Panels/CreateEntity';

import {
	setCreateEntityType,
	setCreateEntityDate,
	setCreateEntityProduct,
	setCreateEntityCount,
	setCreateEntityUnit,
	setCreateEntityUnitPrice,
	setCreateEntityRemark,
} from '../../actions';

export default connect(
	(state) => ({
		// type: {value: true},
		// date: {value: ''},
		product: state.getIn(['data', 'createEntity', 'product']).toJS(),
		// count: {value: 0},
		unit: state.getIn(['data', 'createEntity', 'unit']).toJS(),
		// unitPrice: {value: 0.0},
		// remark: {value: ''},
	}),

	(dispatch) => ({
		setType: (event, isInputChecked) => {
			if(isInputChecked) {
				dispatch(setCreateEntityType({
					value: 'DIESEL',
					errorText: ''
				}));
			}
			else {
				dispatch(setCreateEntityType({
					value: 'LUB_OIL',
					errorText: ''
				}));
			}
			// NOTE: type 不需要 errorText?
		},
		setDate: (none, date) => {
			dispatch(setCreateEntityDate({
				date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
				errorText: '',
			}));
		},
		dateTimFormat: () => (
			Intl.DateTimeFormat
		),
		formatDate: (date) => (
			`${date.getMonth() + 1}/${date.getDate()}`
		),
		setProduct: (event, key, value) => {
			dispatch(setCreateEntityProduct({
				value,
				errorText: '',
			}));
		},
		setCount: (event) => {
			dispatch(setCreateEntityCount({
				count: event.target.value,
				errorText: '',
			}));
		},
		setUnit: (event, key, value) => {
			dispatch(setCreateEntityUnit({
				value,
				errorText: '',
			}));
		},
		setUnitPrice: (event) => {
			dispatch(setCreateEntityUnitPrice({
				unitPrice: event.target.value,
				errorText: '',
			}));
		},
		setRemark: (event) => {
			dispatch(setCreateEntityRemark({
				remark: event.target.value,
				errorText: '',
			}));
		},

	}),
)(CreateEntityPanel);
