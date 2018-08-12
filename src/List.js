import React from 'react';

import Input from './Input'
import Button from './Button';
import Checkbox from './Checkbox'

const List = (props) => {
   if(props.editing === props.item.uuid) {
      return (
         <li><Input onChange={props.onChange} onEnter={(e) => props.edit(e, props.editing, props.editValue)} value={props.editValue} /></li>
      )
   }
   return (
         <li onDoubleClick={props.handleDoubleClick} >
            <Checkbox onChange={() => props.toggleCheck(props.item.uuid)} isChecked={props.item.isComplete ? true : false} />
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
