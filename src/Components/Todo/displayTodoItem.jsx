import React from 'react'

function displayTodoItem(props) {
	return (
		<li key={props.id} className="list-group-item">
			<p>Task: {props.task}</p>
			<button onClick={props._toggleComplete}>
				Toggle
			</button>
			<button onClick={props._removeTask} className="btn btn-danger">
				Remove
			</button>
		</li>
	)
}

export default displayTodoItem
