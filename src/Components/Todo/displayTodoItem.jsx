import React from 'react'

function displayTodoItem(props) {
	return (
		<li key={props.id} className="list-group-item">
			<p>Task: {props.task}</p>
			<button
			// onClick={e => {
			// 	props._toggleComplete(props.id)
			// }}
			>
				Toggle
			</button>
			<button
				onClick={e => {
					props._removeTask(props.id)
				}}
				className="btn btn-danger"
			>
				Remove
			</button>
		</li>
	)
}

export default displayTodoItem
