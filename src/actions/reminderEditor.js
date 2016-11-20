import {createAction} from 'redux-actions';

import {
	OPEN_REMINDER_EDITOR,
	CLOSE_REMINDER_EDITOR,
	SET_CREATE_ENTITY_TYPE,
	SET_CREATE_ENTITY_DATE,
	SET_CREATE_ENTITY_PRODUCT,
	SET_CREATE_ENTITY_COUNT,
	SET_CREATE_ENTITY_UNIT,
	SET_CREATE_ENTITY_UNITPRICE,
	SET_CREATE_ENTITY_REMARK,
} from '../constants/actionTypes';

export const openReminderEditor = createAction(OPEN_REMINDER_EDITOR);
export const closeReminderEditor = createAction(CLOSE_REMINDER_EDITOR);
export const setCreateEntityType = createAction(SET_CREATE_ENTITY_TYPE);
export const setCreateEntityDate = createAction(SET_CREATE_ENTITY_DATE);
export const setCreateEntityProduct = createAction(SET_CREATE_ENTITY_PRODUCT);
export const setCreateEntityCount = createAction(SET_CREATE_ENTITY_COUNT);
export const setCreateEntityUnit = createAction(SET_CREATE_ENTITY_UNIT);
export const setCreateEntityUnitPrice = createAction(SET_CREATE_ENTITY_UNITPRICE);
export const setCreateEntityRemark = createAction(SET_CREATE_ENTITY_REMARK);
