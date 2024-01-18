import React, { useState } from 'react'

import { close, menu, logo } from '../assets';

import { navLinks } from '../constants';

export default function Navbar() {

  const [toggle, setToggle] = useState(false); //Toggle variable for Navbar on mobile devices
  
  return (
    <nav className='flex w-full py-6 justify-between items-center navbar'>
      {/** Start of Navbar implementation for Desktop services */}
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px] cursor-pointer' />

      <ul className='list-none sm:flex hidden justify-end items-center'>
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id}
          className= {`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10' } text-white`}
          >
            <a href={`#${nav.item}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/**End of Navbar implementation for Desktop and large devices */}

      {/* Start of Navbar implementation for mobile devices*/}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={ toggle ? close : menu } 
        alt="menu"
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => (!prev))} 
        />

        <div className={` ${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mb-0': 'mb-4'} text-white`}
              >
                <a href={`#${nav.item}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/** End of Navbar implementation of Mobile devices */}

    </nav>
  )
}
