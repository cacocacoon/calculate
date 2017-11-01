import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Rx from 'rxjs';
import { autobind } from 'core-decorators';

import './app.scss';

type Props = {};

type State = {
	score: number;
};

@autobind
class App extends React.PureComponent<Props, State> {
	public state: State = {
		score: 0
	};

	private readonly html = document.querySelector('html');

	private readonly mouseUp = Rx.Observable.fromEvent(this.html, 'mouseup');
	
	private mouseDown() {
		Rx.Observable
			.interval(100)
			.takeUntil(this.mouseUp)
			.subscribe(this.click);
	}

	private click() {
		this.setState(prevState => ({
			score: prevState.score + 1
		}));
	}

	public render() {
		return (
			<div onClick={this.click} onMouseDown={this.mouseDown}>
				{this.state.score}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
