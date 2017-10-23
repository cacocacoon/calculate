import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'
import { Observable } from 'rxjs/Rx'



const observable = Observable.create(function subscription(observer) {
	const intervalID = setInterval(() => {
		observer.next('hi')
	}, 1000)

	return function unsubscribe() {
		clearInterval(intervalID)
	}
})


class App extends React.Component<null, null> {
	render(): JSX.Element {
		return <div />
	}
}

ReactDOM.render(<App />, document.querySelector('main'))
