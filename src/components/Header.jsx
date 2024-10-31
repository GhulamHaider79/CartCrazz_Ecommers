import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose} from "react-icons/cg";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
function toggleMenu(params) {
    setIsMenuOpen(!isMenuOpen);
}


    return (
        <div className='flex  w-full items-center justify-between px-8 shadow-md shadow-slate-600 '>

            <img src="/images/CartCrazz.png" alt="Logo" className='hidden md:flex w-[100px] h-[80px]' />


            <nav className='flex gap-8 items-center'>
                <ul className='hidden md:flex gap-8 items-center'>
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
                    <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink to={'/cart'} className='relative' >
                        <FiShoppingCart size={30}  />
                        <span className='absolute -top-[15%] left-[60%] bg-blue-400 rounded-full w-6 h-6 flex justify-center items-center'> 10 </span>
                        </NavLink>
                    </li>
                </ul>
               
                <button className='hidden md:block bg-gray-400 outline-1 outline-green-500 w-20 py-2 rounded-md hover:bg-green-400 transition duration-300 transform hover:-translate-x-2 '>get</button>
               
            </nav>

            {/* for mobil navbar */}

            



            <div className="md:hidden flex pt-4 z-50">
                {isMenuOpen ? (
                    <nav className='fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center'>
                        <CgClose className="text-2xl absolute top-4 right-4" onClick={toggleMenu} />
                        <ul className='flex flex-col gap-8 items-center'>
                            <li className='p-2 rounded-sm hover:bg-slate-100'>
                                <NavLink onClick={toggleMenu} to={'/'} className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                                    Home
                                </NavLink>
                            </li>
                            <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink onClick={toggleMenu} to={'/about'}  className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            About
                        </NavLink>
                    </li>
                    <li className='p-2 rounded-sm hover:bg-slate-100'>
                        <NavLink onClick={toggleMenu} to={'/contact'}  className=" relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Contact Us
                        </NavLink>
                    </li>
                            <li className='p-2 rounded-sm hover:bg-slate-100'>
                                <NavLink onClick={toggleMenu} to={'/cart'} className='relative'>
                                    <FiShoppingCart size={30} />
                                    <span className='absolute -top-[15%] left-[60%] bg-blue-400 rounded-full w-6 h-6 flex justify-center items-center'>10</span>
                                </NavLink>
                            </li>
                        </ul>
                        <button className='mt-8 bg-gray-400 outline-1 outline-green-500 w-20 py-2 rounded-md hover:bg-green-400 transition duration-300 transform hover:-translate-x-2'>
                            Get
                        </button>
                    </nav>
                ) : (
                    <div  className='fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2 bg-white shadow-md'>
                        <img src="/images/CartCrazz.png" alt="Logo" className='w-[100px] h-[80px]' />
                        <CgMenu className="text-2xl" onClick={toggleMenu} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header