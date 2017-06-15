import React, { Component } from 'react'

class TodoItem extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	_remove = () => {
		this.props._removeTask(this.props.id)
	}
	render() {
		return (
			<li className="list-group-item">
				<p>Task: {this.props.task}</p>
				<button
					onClick={e => {
						this.props._toggleComplete(this.props.id)
					}}
				>
					Toggle
				</button>
				<button onClick={this._remove} className="btn btn-danger">
					Remove
				</button>
			</li>
		)
	}
}

export default TodoItem
