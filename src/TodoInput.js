import React from 'react';

import Input from './Input';
import Button from './Button';

const TodoInput = (props) => {
	return (
		<div>
			<Input 
				onChange={props.onChange} 
				onEnter={props.onEnter} 
				value={props.value}
			/>
		</div>
	);
};

export default TodoInput;
