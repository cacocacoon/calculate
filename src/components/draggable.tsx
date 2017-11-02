import * as React from 'react';
import * as Rx from 'rxjs';
import { autobind } from 'core-decorators';

import '../styles/draggable.scss';
type Props = {};

type State = {};

@autobind
class Draggable extends React.PureComponent<Props, State> {
	private draggable: HTMLDivElement;

	public componentDidMount() {
		const body = document.body;

		const mouseDown = Rx.Observable.fromEvent(this.draggable, 'mousedown');
		const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');
		const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

		mouseDown
			.mapTo(mouseMove.takeUntil(mouseUp))
			.concatAll()
			.map((event: MouseEventInit) => ({ x: event.clientX, y: event.clientY }))
			.subscribe(pos => {
				const left = pos.x - this.draggable.clientWidth / 2;
				this.draggable.style.left = (left > 0 ? left : 0) + 'px';
				const top = pos.y - this.draggable.clientHeight / 2;
				this.draggable.style.top = (top > 0 ? top : 0) + 'px';
			});
	}

	public render() {
		return <div className="draggable" ref={ref => (this.draggable = ref)} />;
	}
}

export default Draggable;
