'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import Main from './components/Main/Main';

injectTapEventPlugin();

const App = () => (
	<Provider store={store}>
		<MuiThemeProvider>
				<Main />
		</MuiThemeProvider>
	</Provider>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
