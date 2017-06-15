import React, { Component } from 'react'
// import TodoItem from './TodoItem'
import displayTodoItem from './displayTodoItem'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [
				{ id: 1, task: 'get my react shit done', complete: false },
				{ id: 2, task: 'incorporate redux', complete: true },
				{ id: 3, task: 'add bootstrap4 and make it nice', complete: false }
			],
			lastId: 3
		}
	}
	_addTask = taskObj => {
		// create the new task
		let newId = this.state.lastId
		const newTask = Object.assign({ task: '', complete: false }, taskObj, {
			id: ++newId
		})
		// update the state
		this.setState(prevState => {
			const updatedTasks = prevState.tasks
			updatedTasks.push(newTask)
			return { tasks: updatedTasks, lastId: ++prevState.lastId }
		})
	}
	// VERSION 1
	_removeTask = id => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.filter(task => task.id !== id)
			return { tasks: updatedTasks }
		})
	}
	_toggleComplete = id => {
		this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(task => {
				if (task.id === id) {
					return { ...task, complete: !task.complete }
				} else {
					return task
				}
			})
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
					{this.state.tasks.map(task =>
						// <TodoItem
						// 	key={task.id}
						// 	{...task}
						// 	_removeTask={this._removeTask}
						// 	_toggleComplete={this._toggleComplete}
						// />
						{
							let props = Object.assign({}, task, {
								_removeTask: this._removeTask
							})
							console.log(props)
							return displayTodoItem(props)
						}
					)}
				</ul>
			</div>
		)
	}
}

export default Todo
