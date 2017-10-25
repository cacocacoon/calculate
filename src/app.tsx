import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Rx from 'rxjs'
import { autobind } from 'core-decorators'
import './app.scss'
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

type Props = null

type State = {
	score: number
}

@autobind
class App extends React.PureComponent<Props, State> {
	private pressEvent: Rx.Observable<null> = null

	private pressEventSubscription: Rx.Subscription = null

	public state: State = {
		score: 0
	}

	private mouseDown(): void {
		this.pressEventSubscription = this.pressEvent.subscribe(this.click)
	}

	private mouseUp(): void {
		this.pressEventSubscription.unsubscribe()
	}

	private click(): void {
		this.setState(prevState => ({
			score: prevState.score + 1
		}))
	}

	public componentDidMount(): void {
		this.pressEvent = Rx.Observable.create(observer => {
			setInterval(() => observer.next(), 100)
		})
	}

	public render(): JSX.Element {
		return (
			<div onClick={this.click} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>
				{this.state.score}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementsByTagName('main')[0])
