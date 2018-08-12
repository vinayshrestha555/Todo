import React from 'react';

import Button from './Button';
import Input from './Input'

const List = (props) => {
   if(props.editing === props.item.uuid) {
      return (
         <li><Input onChange={props.onChange} onEnter={(e) => props.edit(e, props.editing, props.editValue)} value={props.editValue} /></li>
      )
   }
   return (
         <li onDoubleClick={props.handleDoubleClick} >
            <Input onChange={() => props.toggleCheck(props.item.uuid)} type="checkbox" checked="true" />
            <span className={props.item.isComplete ? 'complete' : 'active'}>{props.item.todo} </span>
            <Button 
               data={props.item.uuid} 
               name="Remove" 
               onClick={props.onRemove} 
            /> 
         </li>
   ); 
}

export default List;
