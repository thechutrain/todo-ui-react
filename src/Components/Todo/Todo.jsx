import React, { Component } from 'react'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [
				{ id: 1, task: 'get my react shit done', complete: false },
				{ id: 2, task: 'incorporate redux', complete: true }
			]
		}
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.tasks.map(task => displayTask(task))}
				</ul>
			</div>
		)
	}
}

export default Todo

function displayTask(props) {
	return (
		<li key={props.id}>
			<p>Task: {props.task}</p>
		</li>
	)
}
