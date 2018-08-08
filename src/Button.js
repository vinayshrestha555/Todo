import React from 'react';

const Button = ({ _id, name, onClick }) => {
	return (
		<button onClick={() => onClick(_id)} className="todo-btn">{name}</button>
	);
}

export default Button;
