import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/app.scss';

// import LongPress from './components/longPress';
// import Draggable from './components/draggable';


type Props = null;

type State = null;

class App extends React.PureComponent<Props, State> {
	public render() {
		// return <LongPress />;
		// return <Draggable />
		return (((([
			<div className="a" key="1">123</div>,
			<div className="base" key="2">abc</div>
		]))))
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
