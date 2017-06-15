// import React, { Component } from 'react'

// COMPONENT
// class TodoItem extends Component {
// 	_remove = () => {
// 		this.props._removeTask(this.props.id)
// 	}
// 	render() {
// 		return (
// <li className="list-group-item">
// 	<p>Task: {this.props.task}</p>
// 	<button
// 		onClick={e => {
// 			this.props._toggleComplete(this.props.id)
// 		}}
// 	>
// 		Toggle
// 	</button>
// 	<button onClick={this._remove} className="btn btn-danger">
// 		Remove
// 	</button>
// </li>
// 		)
// 	}
// }
// export default TodoItem

// FUNCTION
function displayTodoItem(props) {
	return (
		<li className="list-group-item">
			<p>Task: {props.task}</p>
			<button
				onClick={e => {
					props._toggleComplete(props.id)
				}}
			>
				Toggle
			</button>
			<button onClick={props._remove} className="btn btn-danger">
				Remove
			</button>
		</li>
	)
}

export default displayTodoItem
