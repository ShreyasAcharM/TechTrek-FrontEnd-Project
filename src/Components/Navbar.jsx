import React,{useState} from "react";

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Navbar= () =>{
    const [nav,setNav]=useState(false);

    const handleNav=()=>{
        setNav(!nav)
    }
    return(
          <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-xl text-bold text-white border-b-4 border-gray-600 '>
            <h1 className='w-full text-5xl font-extrabold text-[#00df9A]'>Tech Trek</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 transition-shadow hover:shadow-2xl hover:shadow-white/30 hover:bg-black hover:border rounded-3xl'><NavLink to="/">Home</NavLink></li>
                <li className='p-4 transition-shadow hover:shadow-2xl hover:shadow-white/30 hover:bg-black hover:border rounded-3xl '><NavLink to="/about">About</NavLink></li>
                <li className='p-4 transition-shadow hover:shadow-2xl hover:shadow-white/30 hover:bg-black hover:border rounded-3xl'><NavLink to="/services">Services</NavLink></li>
                <li className='p-4 transition-shadow hover:shadow-2xl hover:shadow-white/30 hover:bg-black hover:border rounded-3xl'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
                
            </div>
            <div className={!nav?"md:hidden fixed z-40 left-0 top-0 w-{60%} h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500":"md:hidden fixed left-[-100%]"}>
                <h1 className='w-full text-3xl font-bold text-[#00df9A] m-4'>Tech Trek</h1>
                <ul className="uppercase p-4">
                <li className='p-4 text-s border-b border-gray-600 hover:text-[#00df9A]'><NavLink to="/">Home</NavLink></li>
                <li className='p-4 text-s border-b border-gray-600  hover:text-[#00df9A]'><NavLink to="/about">About</NavLink></li>
                <li className='p-4 text-s border-b border-gray-600  hover:text-[#00df9A]'><NavLink to="/services">Services</NavLink></li>      
                <li className='p-4 text-s  hover:text-[#00df9A]'><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </div>
          </div>
    );
}
export default Navbar;