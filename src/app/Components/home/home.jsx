"use client"
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../../../public/assets/images/ambulance1.png'
import Link from 'next/link'
import Patient from './patient'
function registrationform() {
  const [options, setOptions] = useState (1)
  return (
   <>
   {/* <div className='w-64 h-9 bg-blue-700 ml-127 mt-4 rounded-full'>
          <div className='p-1 text-white flex justify-around'>
          <button className='cursor-pointer' onClick={()=>setOptions(1)}>Patient</button>
          <button className='cursor-pointer' onClick={()=>setOptions(2)}>Doctor</button>
          <button className='cursor-pointer' onClick={()=>setOptions(3)}>Receptionist</button>
          </div>
          </div> */}
   <Patient/>
   {/* <Docto */}
   </>
  )
}

export default registrationform
