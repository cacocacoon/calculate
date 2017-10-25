import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './app.scss'
import * as Rx from 'rxjs'
import { autobind } from 'core-decorators'
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

type P = null

type S = {
	score: number
}

@autobind
class App extends React.PureComponent<P, S> {
	private pressEvent: Rx.Observable<null> = null

	private pressEventSubscription: Rx.Subscription = null

	public state: S = {
		score: 0
	}

	private mouseDown(): void {
		this.pressEventSubscription = this.pressEvent.subscribe(() => {
			this.setState(prevState => ({
				score: prevState.score + 1
			}))
		})
	}

	private mouseUp(): void {
		this.pressEventSubscription.unsubscribe()
	}

	public componentDidMount(): void {
		this.pressEvent = Rx.Observable.create(observer => {
			setInterval(() => {
				observer.next()
			}, 300)
		})
	}

	public render(): JSX.Element {
		return (
			<div onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>
				{this.state.score}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('main'))
