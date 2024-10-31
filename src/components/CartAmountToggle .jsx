import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaMinus, FaPlus } from "react-icons/fa6";

function CartAmountToggle ({amount, setDecrease, setIncrease}) {
  return (
    <div className='flex flex-col gap-4 justify-start'>
        <div className='flex gap-4'>
            <button onClick={ () => setDecrease() }><FaMinus /></button>
            <div>{amount}</div>
            <button onClick={ () => setIncrease() }><FaPlus /></button>
        </div>
        <NavLink to={'/Cart'}>
            <button className='bg-gray-400 outline-1 outline-green-500 px-4 py-2 rounded-md hover:bg-green-400 transition duration-300 transform hover:-translate-x-2'>Add To Cart</button>
        </NavLink>
         </div>
  )
}

export default CartAmountToggle 