import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
         <ul className='mb-8'>
          <li> Monday - Saturday, 8am to 10pm</li>
          <li> +62 0888 904 711</li>
          <li> global@hospitals.com</li>
         </ul>
            </div>

        <div>
            <h1 className='text-xl mb-3'>OUR LOCATION</h1>
            <p className='mb-8'>The Suithouse V303, Kuningan City, Jakarta Indonesia 12940</p>
            <h1 className='mb-8'>FOLLOW US</h1>
           </div>
        </div>
  )
}

export default footer
