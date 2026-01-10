import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/images/ambulance1.png'

function navbar() {
  return (
    <nav className='flex justify-around items-center gap-80 mt-6'>
        {/* Left side of navbar */}
        <div className='flex gap-4 text-white mr-[-3]'>
            <Image src={Logo} alt='logo' className='size-8'/>
            <h1 className='text-2xl'>GLOBAL HOSPITALS</h1>
        </div>
        {/* Right side of Navbar */}
        <div className='flex flex-row gap-12 text-white text-base'>
            <div>
                <h1>HOME</h1></div>
                 <div>
                    <h1>ABOUT US</h1>
                 </div>
               <div>
               <h1>CONTACT</h1>
                </div>
        </div>
    </nav>
  )
}

export default navbar
