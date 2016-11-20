import {connect} from 'react-redux';
import CreateEntityPanel from '../../components/Panels/CreateEntity';
import {ENTITY} from '../../constants/CONST';

import {
	setCreateEntityType,
	setCreateEntityDate,
	setCreateEntityProductName,
	setCreateEntityCount,
	setCreateEntityUnit,
	setCreateEntityUnitPrice,
	setCreateEntityRemark,
	pushNewEntity
} from '../../actions';

export default connect(
	(state) => ({
		// type: {value: true},
		// date: {value: ''},
		productName: state.getIn(['data', 'createEntity', 'productName']).toJS(),
		// count: {value: 0},
		unit: state.getIn(['data', 'createEntity', 'unit']).toJS(),
		// unitPrice: {value: 0.0},
		// remark: {value: ''},
	}),

	(dispatch) => ({
		setType: (event, isInputChecked) => {
			const DIESEL = ENTITY.getIn(['TYPE', 'DIESEL']);
			const LUB_OIL = ENTITY.getIn(['TYPE', 'LUB_OIL']);
			let value = isInputChecked ? DIESEL : LUB_OIL;
			dispatch(setCreateEntityType({
				value,
				errorText: ''
			}));
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
		setProductName: (event, key, value) => {
			dispatch(setCreateEntityProductName({
				value,
				errorText: '',
			}));
		},
		setCount: (event) => {
			dispatch(setCreateEntityCount({
				value: event.target.value,
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
				value: event.target.value,
				errorText: '',
			}));
		},
		setRemark: (event) => {
			dispatch(setCreateEntityRemark({
				value: event.target.value,
				errorText: '',
			}));
		},
		pushNewEntity: () => {
			dispatch(pushNewEntity());
		}
	}),
)(CreateEntityPanel);
