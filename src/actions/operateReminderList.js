import {createAction} from 'redux-actions';
import {
	GO_OPERATING_STEP,
	SET_OPERATING_TYPE,
} from '../constants/actionTypes';

export const goOperatingStep = createAction(GO_OPERATING_STEP);
export const setOperatingType = createAction(SET_OPERATING_TYPE);
