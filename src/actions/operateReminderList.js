import {createAction} from 'redux-actions';

import {
	GO_OPERATING_STEP,
	SET_OPERATING_TYPE,
	SET_REMINDERLIST_NAMELIST,
	SET_OPERATE_NAME_INPUT_ERRORTEXT,
	SET_OPERATE_REMINDERLIST_NAME,
	SET_REMINDERLIST,
	OPEN_OPERATE_MODAL,
	CLOSE_OPERATE_MODAL,
	INIT_OPERATE_MODAL_DATA,
	INIT_OPERATE_MODAL_UI,

} from '../constants/actionTypes';

export const openOperateModal = createAction(OPEN_OPERATE_MODAL);

export const goOperatingStep = createAction(GO_OPERATING_STEP);
export const setOperatingType = createAction(SET_OPERATING_TYPE);

export const setReminderListNameList = createAction(SET_REMINDERLIST_NAMELIST);
export const setOperateNameInputErrorText = createAction(SET_OPERATE_NAME_INPUT_ERRORTEXT);
export const setOperateReminderListName = createAction(SET_OPERATE_REMINDERLIST_NAME);
export const setReminderList = createAction(SET_REMINDERLIST);
export const closeOperateModal = createAction(CLOSE_OPERATE_MODAL);
export const initOperateModalData = createAction(INIT_OPERATE_MODAL_DATA);
export const initOperateModalUi = createAction(INIT_OPERATE_MODAL_UI);
