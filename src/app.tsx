import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import * as Rx from 'rxjs';
// import { autobind } from 'core-decorators';

import './styles/app.scss'

import Menu from './components/menu'


const App = () => <Menu />;
ReactDOM.render(<App />, document.querySelector('main'))
