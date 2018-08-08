import React from 'react';
import ReactDOM from 'react-dom';
import { getRandom } from '../utils';
 
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			editValue: '',
			editing: null,
			todos: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
		this.onEnter = this.onEnter.bind(this);
		this.remove = this.remove.bind(this);
		this.edit = this.edit.bind(this);
	}   

	handleChange(event) {
		if(this.state.editing) {
			this.setState({ editValue: event.target.value });
		} else {
			this.setState({ value: event.target.value });
		}
	}

	onEnter(e) {
		if(e.key === 'Enter') {
			this.setState(prevState => (
				{ todos: [...prevState.todos, { todo: prevState.value, uuid: getRandom() }], value: ''  }) 
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

	render() {
		return (
			<div>
				<TodoInput 
					onChange={this.handleChange} 
					onEnter={this.onEnter} 
					value={this.state.value} 
				/>

				<TodoItem 
					todos={this.state.todos} 
					handleDoubleClick={this.handleDoubleClick} 
					editing={this.state.editing} 
					editValue={this.state.editValue}
					edit={this.edit}
					onChange={this.handleChange}
					onRemove={this.remove}
				/>
			</div>
		)
	}   
}

ReactDOM.render(<Todo />, document.getElementById('root'));
