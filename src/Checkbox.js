import React from 'react';

const Checkbox = ({ isChecked, onChange }) =>{
   return (
      <input type="checkbox"  onChange={onChange} checked={isChecked} />
   );
};

export default Checkbox;
