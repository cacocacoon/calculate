import {createAction} from 'redux-actions';

import {
	GO_OPERATING_STEP,
	SET_OPERATING_TYPE,
	SET_REMINDERLIST_NAMELIST,
	SET_OPERATE_NAME_INPUT_ERRORTEXT,
	SET_OPERATE_REMINDERLIST_NAME,
} from '../constants/actionTypes';

export const goOperatingStep = createAction(GO_OPERATING_STEP);
export const setOperatingType = createAction(SET_OPERATING_TYPE);

export const setReminderListNameList = createAction(SET_REMINDERLIST_NAMELIST);
export const setOperateNameInputErrorText = createAction(SET_OPERATE_NAME_INPUT_ERRORTEXT);
export const setOperateReminderListName = createAction(SET_OPERATE_REMINDERLIST_NAME);
