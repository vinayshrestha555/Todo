import React from 'react';

import Button from './Button';

const Footer = ({ count, onClick, clearCompleted }) => {
   return (
      <div>
         <span>{count} item(s) remaining</span>
         <Button data='' onClick={onClick} name='All' />
         <Button data='active' onClick={onClick} name='Active' />
         <Button data='completed' onClick={onClick} name='Completed' />
         <Button data='' onClick={clearCompleted} name='Clear Completed' />
      </div>
   )
};

export default Footer;