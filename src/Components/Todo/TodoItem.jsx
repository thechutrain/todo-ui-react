import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<li key={this.props.id} className="list-group-item">
				<p>Task: {this.props.task}</p>
			</li>
		)
	}
}

export default TodoItem
