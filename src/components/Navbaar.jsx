import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className='w-full h-[90px]'>
        <div className='max-w-[90%] mx-auto px-4 flex justify-between items-center h-full'>
          <div className='text-white font-bold'>AghoriMedia</div>
          <div className='hidden md:flex'>
            <ul className='flex text-white'>
              <li className='px-4'>Home</li>
              <li className='px-4'>About</li>
              <li className='px-4'>Portfolio</li>
              <li className='px-4'>Contact</li>
            </ul>
          </div>

          {/* mobile menu start */}
          {/* hambruger menu start */}
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          </div>
          {/* hambruger menu end */}

          <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex text-center justify-center ' : 'absolute left-[-100] hidden'}>
            <ul>
              <li className='text-2xl py-4'>Home</li>
              <li className='text-2xl py-4'>About</li>
              <li className='text-2xl py-4'>Portfolio</li>
              <li className='text-2xl py-4'>Contact</li>
            </ul>
          </div>
          {/* mobile menu end */}
        </div>
      </div>
    </>
  )
}

export default Navbar