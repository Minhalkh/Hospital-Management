import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Logo from '../../../public/assets/images/ambulance1.png'
import About from "../Pages/About/page"
import Contact from "../Pages/Contact/page"

function navbar() {
  return (
    <nav className='flex justify-between items-center mx-18 my-6'>
        {/* Left side of navbar */}
        <div className='flex gap-4 text-white mr-[-3]'>
            <Image src={Logo} alt='logo' className='size-8'/>
            <h1 className='text-2xl cursor-pointer'>GLOBAL HOSPITALS</h1>
        </div>
        {/* Right side of Navbar */}
        <ul className='flex flex-row gap-12 text-white text-base'>
                <li>
                  <Link href="/" className="cursor-pointer">HOME</Link></li>
                    <li>
                      <Link href="/../Pages/About" className="cursor-pointer">ABOUT US</Link></li>
               <li>
                <Link href="../Pages/Contact" className="cursor-pointer">CONTACT</Link></li>
        </ul>
    </nav>
  )
}

export default navbar