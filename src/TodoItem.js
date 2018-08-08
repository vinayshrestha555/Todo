import React from 'react';

import List from './List';
import Button from './Button';
import TodoInput from './TodoInput';

const TodoItem = (props) => {

	let todos = props.todos .map((item, i) => {
		return (
			<List 
				key={item.uuid} 
				handleDoubleClick={() => props.handleDoubleClick(item)}
				editing={props.editing} 
				editValue={props.editValue}
				edit={props.edit}
				item={item.todo} 
				_id={item.uuid}
				onChange={props.onChange}
				onRemove={props.onRemove}
			/>
		);
	});

	return ( <ul>{todos}</ul> );
}

export default TodoItem;
