import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  return (
   <li className='list-group-item d-flex justify-content-between align-item-center'>
     {props.name}
     <div>
       <span className='badge badge-primary badge-pill mr-3'>
         ${props.cost}

       </span>
       <TiDelete size='1.5cm'></TiDelete>
     </div>
   </li>
  )
}

export default ExpenseItem;
