import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers/rootReducer';

const initialState = Immutable.fromJS({
	// ui: {
	// 	logIn: {
	// 		modalIsOpen: false,
	// 		enableLogInButton: true
	// 	},
	// },
	// data: {
	// 	logIn: {
	// 		email: '',
	// 		password: '',
	// 	},
	// }
});

export default createStore(
	rootReducer,
	initialState,
	applyMiddleware(reduxThunk, createLogger({stateTransformer: state => state.toJS()}))
);
