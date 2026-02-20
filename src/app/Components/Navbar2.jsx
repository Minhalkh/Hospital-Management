import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Navbar2() {
  return (
    <div className='w-full flex items-center text-white px-10 py-4 font-semibold'>

      <div className='flex items-center gap-4'>
        <FontAwesomeIcon icon={faUserPlus} className='w-[30px] max-md:w-[20px]'/>
        <h1 className='text-2xl cursor-pointer max-md:text-sm'>GLOBAL HOSPITALS</h1>
      </div>

      <div className='flex gap-20 max-md:hidden ml-auto'>
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className='hidden max-md:block ml-auto max-md:flex max-md:flex-col'>
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
      </div>

    </div>
  )
}

export default Navbar2
