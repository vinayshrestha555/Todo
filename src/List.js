import React from 'react';

import Button from './Button';
import Input from './Input'

const List = (props) => {
   if(props.editing === props._id) {
      return (
         <li><Input onChange={props.onChange} onEnter={(e) => props.edit(e, props.editing, props.editValue)} value={props.editValue} /></li>
      )
   }
   return (
      <li onDoubleClick={props.handleDoubleClick} >{props.item} <Button _id={props._id} name="Remove" onClick={props.onRemove} /> </li>
   ); 
}

export default List;
