import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
const Listitems = ({items,handleChange,handleDelete}) => {
  return (
    <ul>{items.map((item)=>(
        <li className='item' key={item.id}>
          <input type='checkbox'
           onChange={()=> handleChange(item.id)}
           checked={item.checked}
          
          ></input>
        <label onDoubleClick={()=>handleChange(item.id)}
          style={(item.checked)?{textDecoration:"line-through"}:null}>
          {item.item}
        </label>
        <FaTrashCan 
             role='button'
             onClick={()=>handleDelete(item.id)}
             />
             
        </li>
       ))}
    </ul>
  )
}

export default Listitems