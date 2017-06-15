import React, { Component } from 'react'
// import TodoItem from './TodoItem'
import displayTodoItem from './displayTodoItem'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
			lastId: 0
		}
		// this.state = {
		// 	tasks: [
		// 		{ id: 1, task: 'get my react shit done', complete: false },
		// 		{ id: 2, task: 'incorporate redux', complete: true },
		// 		{ id: 3, task: 'add bootstrap4 and make it nice', complete: false }
		// 	],
		// 	lastId: 3
		// }
	}
	_addTask = taskObj => {
		this.setState(prevState => {
			const newTask = { task: '', complete: false, id: ++prevState.lastId }
			const updatedTasks = prevState.tasks
			updatedTasks.push(newTask)
			return { tasks: updatedTasks }
		})
	}
	_removeTask = id => () => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.filter(task => task.id !== id)
			return { tasks: updatedTasks }
		})
	}
	_toggleComplete = id => () => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(
				task => (task.id === id ? { ...task, complete: !task.complete } : task)
			)
			return { tasks: updatedTasks }
		})
	}
	render() {
		return (
			<div>
				<h2>Total Tasks: {this.state.tasks.length}</h2>
				<button onClick={this._addTask} className="btn btn-default">
					{' '}Add Task{' '}
				</button>
				<ul className="list-group">
					{this.state.tasks.map(task => {
						let props = Object.assign({}, task, {
							_removeTask: this._removeTask(task.id),
							_toggleComplete: this._toggleComplete(task.id)
						})
						// console.log(props) // interesting that props is a lot more crap
						return displayTodoItem(props)
					})}
				</ul>
			</div>
		)
	}
}

export default Todo
