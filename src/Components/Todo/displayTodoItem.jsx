import React from 'react'

function displayTodoItem(props) {
	return (
		<li key={props.id} className="list-group-item">
			<div className="input-group">
				{/*  Checkbox for Completion */}
				<span className="input-group-addon">
					<input
						checked={props.complete}
						onChange={props._toggleComplete}
						type="checkbox"
						aria-label="Checkbox for toggling task"
					/>
				</span>
				{/*  Input for Task name */}
				<input
					value={props.task}
					onChange={e => {
						props._updateTask(e.target.value)
					}}
					type="text"
					className="form-control"
				/>
				{/*  Remove Button */}
				<span className="input-group-btn">
					<button
						onClick={props._removeTask}
						className="btn btn-secondary btn-danger"
					>
						Remove
					</button>
				</span>
			</div>
		</li>
	)
}

export default displayTodoItem
