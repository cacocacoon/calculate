import * as React from 'react'
import { autobind } from 'core-decorators'

type Props = {
	children?: any
}
type State = {
	show: Boolean
}
@autobind
class Toggleable extends React.PureComponent<Props, State> {
	state: State = {
		show: false
	}

	toggle() {
		this.setState(prevState => ({
			show: !prevState.show
		}))
	}

	render() {
		return this.props.children(this.state.show, this.toggle)
	}
}

const TaggleableMenu = props => (
	<Toggleable>
		{(show, onClick) => (
			<div>
				<div onClick={onClick}>
					<h1>{props.title}</h1>
				</div>
				{show && props.children}
			</div>
		)}
	</Toggleable>
)
export default class Menu extends React.Component {
	render() {
		return [
			<TaggleableMenu title="First Menu">
				<p>some content</p>
			</TaggleableMenu>,
			<TaggleableMenu title="Second Menu">
				<p>Another content</p>
			</TaggleableMenu>,
			<TaggleableMenu title="Third Menu">
				<p>More content</p>
			</TaggleableMenu>
		]
	}
}
