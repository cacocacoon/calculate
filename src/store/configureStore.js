import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers/rootReducer';
import isSignIn from '../firebase/signIn';

// TODO: 登入狀態在初始化時期就要先跟firebase詢問是否已登入
const initialState = Immutable.fromJS({
	ui: {
		logInModalIsOpen: !isSignIn
	},
	data: {
		logIn: {
			email: '',
			password: ''
		},
	}
});

export default createStore(
	rootReducer,
	initialState,
	applyMiddleware(reduxThunk, createLogger({stateTransformer: state => state.toJS()}))
);
