import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/images/ambulance1.png'
function registrationform() {
  return (
    <div className='flex justify-between mx-10'>
        <div className='flex flex-col gap-10'>
        <Image src={Logo} alt='Logo' className='size-20'/>
        <h1 className='text-white text-2xl font-bold'>Welcome</h1>
        </div>
        
        <div className='bg-white h-100 w-170'>
          <div className='flex justify-end w-70 h-8 p-1 bg-blue-700 rounded-2xl text-white gap-10 mt-8 mx-90'>
          <h1>Patient</h1>
          <h1>Doctor</h1>
          <h1>Receptionist</h1>
          </div>
          <div>
            <h2 className='ml-40 text-3xl'>Register as a Patient</h2>
            <form action="" className='grid grid-cols-2 gap-30 mx-4 my-8'>
              <div className='grid gap-4'>
              <input type="text"
              name='name'
              placeholder='First Name*'
              className='rounded-xl border' />
              
              <input type="text"
              name='name'
              placeholder='Last Name*'
              className='rounded-full border' />

              <input type="text" 
              name='Email'
              placeholder='Your Email*'
              className='rounded-full border'/>
              </div>

              <div className='grid gap-4'>
                
                <input type="text"
                name=''
                placeholder='Your Phone*'
                className='rounded-full border' />

                <input type="text" 
                name='Password'
                placeholder='Password'
                className='rounded-full border'/>

                <input type="text" 
                name=''
                placeholder='Confirm Password'
                className='rounded-full border'/> 
              </div>
              
            </form>
          </div>
        </div>
    </div>
  )
}

export default registrationform
