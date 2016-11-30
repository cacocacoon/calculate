import {combineReducers} from 'redux-immutable';
import ui from './ui/uiReducers';
import data from './data/dataReducers';

const rootReducer = combineReducers({
  ui,
	data,
});

export default rootReducer;
