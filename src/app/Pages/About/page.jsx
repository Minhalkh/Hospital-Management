'use client'
import React, { useState } from 'react'
import Health from '@/app/Components/about/health';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Appointment from '@/app/Components/about/appointment';
import Medical from '@/app/Components/about/medical';
import Footer from '@/app/Components/footer'

function page() {
  return (
    <div className='text-white'>
    <Health/>
    <Appointment/>
    <Medical/>
    </div>
  )
}

export default page
