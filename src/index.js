import React from 'react';
import ReactDOM from 'react-dom';
import { getRandom } from '../utils';
 
import Button from './Button';
import Footer from './Footer';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			shownTodos: [],
			count: 0,
			value: '',
			nowShowing: 'all',
			editValue: '',
			editing: null,
		};

		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);
		this.onEnter = this.onEnter.bind(this);
		this.toggleCheck = this.toggleCheck.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.clearCompleted = this.clearCompleted.bind(this);
		this.changeTodosState = this.changeTodosState.bind(this);
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
	}   

	handleChange(event) {
		if(this.state.editing) {
			this.setState({ editValue: event.target.value });
		} else {
			this.setState({ value: event.target.value });
		}
	}

	toggleCheck(id) {
		let todos = this.state.todos;
		let index = todos.findIndex(t => t.uuid === id);
		todos[index].isComplete = !todos[index].isComplete;
		this.setState({ todos, count: todos.filter(t => !t.isComplete).length });
	}

	onEnter(e) {
		if(e.key === 'Enter') {
			this.setState(prevState => (
				{ todos: [...prevState.todos, { todo: prevState.value, uuid: getRandom(), isComplete: false }], value: '', count: prevState.todos.length + 1}) 
			);
		}
	}

	handleDoubleClick(item) {
		this.setState({ editing: item.uuid, editValue: item.todo });
	}

	remove(key) {
		this.setState({ todos: this.state.todos.filter(t => (key !== t.uuid) ) })
	}

	edit(e, id, value) {
		if(e.key === 'Enter') {
			this.setState(prevState => {
				return {
					todos: prevState.todos.map(item => {
						return item.uuid === id ? { todo: value, uuid: id } : item;
					}),
					editing: null
				}
			})
		}
	}

	changeTodosState(todoState) {
		let todos = this.state.todos;
		switch(todoState) {
			case 'active':
				this.setState({ nowShowing: 'active', shownTodos: todos.filter(t => !t.isComplete) });
				break;
			case 'completed':
				this.setState({ nowShowing: 'completed', shownTodos: todos.filter(t => t.isComplete) });
				break;
			default:
				this.setState({ nowShowing: 'all', shownTodos: todos });
				break;
		}
	}

	clearCompleted() {
		let todos = this.state.todos,
			shownTodos = todos.filter(t => !t.isComplete)

		this.setState({ todos: shownTodos, shownTodos });
	}

	render() {
		return (
			<div>
				<TodoInput 
					onChange={this.handleChange} 
					onEnter={this.onEnter} 
					value={this.state.value} 
				/>

				<TodoItem 
					todos={this.state.nowShowing === 'all' ? this.state.todos : this.state.shownTodos}
					nowShowing={this.state.nowShowing}
					handleDoubleClick={this.handleDoubleClick} 
					toggleCheck={this.toggleCheck}
					editing={this.state.editing} 
					editValue={this.state.editValue}
					edit={this.edit}
					onChange={this.handleChange}
					onRemove={this.remove}
				/>

				<Footer count={this.state.count} onClick={this.changeTodosState} clearCompleted={this.clearCompleted}/>

			</div>
		)
	}   
}

ReactDOM.render(<Todo />, document.getElementById('root'));
