import {createStore, applyMiddleware, compose} from 'redux';
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
	rootReducer,
	initialState,
	composeEnhancers(
		applyMiddleware(reduxThunk)
		// applyMiddleware(reduxThunk, createLogger({stateTransformer: state => state.toJS()}))
	)
);
