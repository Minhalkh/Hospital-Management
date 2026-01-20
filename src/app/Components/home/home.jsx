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
   <Patient/>
   {/* <Docto */}
   </>
  )
}

export default registrationform
