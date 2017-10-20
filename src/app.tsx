import * as React from 'react'
import * as ReactDOM from 'react-dom'


class App extends React.Component<{}, {}> {
    render(): JSX.Element {
        return <div>Hello World!</div>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))