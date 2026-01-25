import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/images/ambulance1.png'

function navbar() {
  return (
    <nav className='flex justify-between items-center mx-28 my-6'>
        {/* Left side of navbar */}
        <div className='flex gap-4 text-white mr-[-3]'>
            <Image src={Logo} alt='logo' className='size-8'/>
            <h1 className='text-2xl cursor-pointer'>GLOBAL HOSPITALS</h1>
        </div>
        {/* Right side of Navbar */}
        <ul className='flex flex-row gap-12 text-white text-base'>
                <li className='cursor-pointer'>HOME</li>
                    <li className='cursor-pointer'>ABOUT US</li>
               <li className='cursor-pointer'>CONTACT</li>
        </ul>
    </nav>
  )
}

export default navbar