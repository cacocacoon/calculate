import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as Rx from 'rxjs';
// import { autobind } from 'core-decorators';

import './app.scss';

import Menu from './components/menu'


// const App = (props: Props) => (
//     <div>
//         <Menu />
//     </div>
// )

class App extends React.Component {
    render() {
        return <Menu />
    }
}

ReactDOM.render(<App />, document.querySelector('main'));
