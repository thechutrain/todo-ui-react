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
	}
	_addTask = taskObj => {
		this.setState(prevState => {
			const newTask = { text: '', complete: false, id: ++prevState.lastId }
			const updatedTasks = prevState.tasks
			updatedTasks.push(newTask)
			return { tasks: updatedTasks }
		})
	}
	_updateTask = id => newText => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(
				task => (task.id === id ? { ...task, text: newText } : task)
			)
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
							_toggleComplete: this._toggleComplete(task.id),
							_updateTask: this._updateTask(task.id)
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
