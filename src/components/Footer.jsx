import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";


function Footer() {
  return (
    <div className='w-full flex justify-center items-center mt-24 sm:mt-8 p-8 '>
        <div className=' w-full   bg-gray-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400  transition duration-1000 ease-in py-8 rounded-lg shadow-lg shadow-black flex gap-2 items-center flex-col '>
        <div className=' w-full sm:w-[75%] flex  flex-col pl-4 sm-pl-0 items-start  sm:flex-row sm:justify-evenly mt-8'>
            <div className='mt-4'>
                <h1 className='font-bold text-xl tracking-tight'>About Store</h1>
                <ul className='flex flex-wrap sm:flex-col'>
                <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink to={'/'}  className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Home
                        </NavLink>
                    </li>
                    <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink to={'/about'}  className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            About
                        </NavLink>
                    </li>
                    <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink to={'/contact'}  className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Contact Us
                        </NavLink>
                    </li>
                    <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink to={'/products'}  className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100" >
                            Products
                        </NavLink>
                    </li>
                   
                </ul>
                
            </div>

            <div className='mt-4'>
                <h1 className='font-bold text-xl tracking-tight'>Catagories</h1>
                <ul className='flex flex-wrap gap-4 sm:flex-col sm:gap-2'>
                    <li>
                        <NavLink to={'/single-product/:id'}>
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/single-product/:id'}>
                            Women
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/single-product/:id'}>
                            Bags
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/single-product/:id'}>
                            Clothes
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex  flex-col sm:gap-2 justify-start mt-4'>
                <h1 className='font-bold text-xl tracking-tight'>Get In Touch</h1>

                <div className='flex flex-wrap gap-4 sm:flex-col sm:gap-2'>
                <NavLink to={'/'}>
                    facebook
                </NavLink>
                <NavLink to={'/'}>
                    tweeter
                </NavLink>
                <NavLink to={'/'}>
                    LinkedIn
                </NavLink>
                </div>
            </div>
        </div>
        
        <p className='text-slate-500'>All copy rights reserve</p>
        </div>
     
    </div>
  )
}

export default Footer