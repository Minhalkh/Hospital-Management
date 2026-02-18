import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function footer() {
  return (
        <div className='grid grid-cols-3 text-white gap-20 ml-[140px] mt-20'>
        <div className=''>
      <h1 className='text-xl mb-3'>ABOUT GLOBAL HOSPITALS</h1>
      <p className='mb-8'>Lorem ipsum dolor the sit amet, ne nam purto nihil impetus, an facilisi accommodare sea</p>
      <h1 className='text-xl'>INFORMATION</h1>
        <ul className='mb-8'>
          <li>Home</li>
          <li>Laboratory</li>
          <li>Medical Treatment</li>
          <li>Terms and Conditions</li>
        </ul>
            </div>

      <div>
        <h1 className='text-xl mb-3'>GLOBAL HOSPITALS</h1>
        <p className='mb-8'>Nam leo lorem, tincidunt id risus ut, ornare tincidunt naqunc sit amet.</p>
         <ul className='mb-8 '>
          <li className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} />
            <p>Monday - Saturday, 8am to 10pm</p>
          </li>
          <li className='flex items-center gap-2 my-4'> 
            <FontAwesomeIcon icon={faPhone} />
            <p>+62 0888 904 711</p>
          </li>
          <li className='flex items-center gap-2'> 
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>global@hospitals.com</p>
          </li>
         </ul>
            </div>

        <div>
            <h1 className='text-xl mb-3'>OUR LOCATION</h1>
            <p className='mb-8'>The Suithouse V303, Kuningan City, Jakarta Indonesia 12940</p>
            <h1 className=''>FOLLOW US</h1>
            <div className='my-2 flex items-center gap-2'>
              <Link href='#' className='bg-[#3873ae] p-2 hover:bg-[#4893ce] duration-200 ease-in-out'><FontAwesomeIcon icon={faEnvelope}/></Link>
              <Link href='#' className='bg-[#62C6F8] p-2 hover:bg-[#82E6FF] duration-200 ease-in-out'><FontAwesomeIcon icon={faCalendar}/></Link>
              <Link href='#' className='bg-[#000000] p-2 hover:bg-[#333333] duration-200 ease-in-out'><FontAwesomeIcon icon={faPhone}/></Link>
              <Link href='#' className='bg-[#51A6D3] p-2 hover:bg-[#71C6F3] duration-200 ease-in-out'><FontAwesomeIcon icon={faCalendar}/></Link>
              <Link href='#' className='bg-[#D74980] p-2 hover:bg-[#F769A0] duration-200 ease-in-out'><FontAwesomeIcon icon={faPhone}/></Link>
            </div>
           </div>
        </div>
  )
}

export default footer
