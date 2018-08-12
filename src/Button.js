import React from 'react';

const Button = ({ data, name, onClick }) => {
	return (
		<button onClick={() => onClick(data)} className="todo-btn">{name}</button>
	);
}

export default Button;
