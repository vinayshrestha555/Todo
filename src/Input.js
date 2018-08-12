import React from 'react';

const Input = (props) =>{
   return (
      <input text="text" onChange={props.onChange} value={props.value} onKeyPress={props.onEnter} type={props.type || 'text'}/>
   );
};

export default Input;
