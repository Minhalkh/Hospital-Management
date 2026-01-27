import React from 'react'
import Image from 'next/image'
import img1 from '../../../../public/assets/images/img-1.png'
import doctor from '@/app/Components/home/doctor'

function page() {
  return (
    <div className='text-white'>
    <div className='mt-20 flex justify-around mx-[80px]'>
      <div>
      <h1 className='text-4xl'>GLOBAL HOSPITALS</h1>
      <p className='text-3xl mt-2'>Provide best quality health care for you</p>
      <div className='mt-12'><h3 className='font-bold text-xl'>Affordable monthly premium packages</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
      <div className='my-4'><h3 className='font-bold text-xl'>Choose Your Favourite Services</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
      <div><h3 className='font-bold text-xl'>Only Use Friendly Environment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
      <button className='bg-white text-blue-700 ml-77 mt-7 p-2 rounded'>LEARN MORE
      </button>
      </div>
      <div>
        <Image src={img1} alt='doctor' className='w-[565px]'/>
      </div>
    </div>
    <div className='flex justify-between mx-28 gap-4 mt-28'> 
      <div><h1 className='text-xl my-4'>Make an Appointment</h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.</p></div>
      <div><h1 className='text-xl my-4'>Choose Your Package</h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.</p></div>
      <div><h1 className='text-xl my-4'>Help By Specialist</h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.</p></div>
      <div><h1 className='text-xl my-4'>Get a diagnostic report</h1>
      <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.</p></div>
    </div>
    </div>
  )
}

export default page
