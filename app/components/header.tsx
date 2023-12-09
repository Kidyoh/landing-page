"use client";
import React, { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"Features",link:"/"},
        {name:"Blogs",link:"/"},
        {name:"Pricing",link:"/"},
      ];
    let [open, setOpen] = useState(false);

    return (
        <div className=' w-full fixed top-0 left-0 absolute'>
           <div className='md:flex items-center justify-between bg-indigo-600 py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src="/nexy.png" className='w-10' alt="" />
                <span className='text-white'>Nexy</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />
                }
            </div>
            {/* link items */}
            <ul className={`md:flex md:items-center text-black md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 text-black' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className={`text-white hover:text-blue-400 duration-500 ${open? 'text-black' : 'text-white'} `}>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-white text-indigo-600 border-[] md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</button>
                <button className='btn bg-orange-500 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Sign up</button>
            </ul>
           </div>
        </div>
    );
};

export default Header;