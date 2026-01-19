"use client"
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../../public/assets/images/ambulance1.png'
import Link from 'next/link'
function registrationform() {
  const [gender, setGender] = useState ("")
  return (
    <div className='flex justify-between my-14 mx-8'>
        <div className='flex flex-col gap-4 my-28 ml-30'>
        <Image src={Logo} alt='Logo' className='size-14 ml-8 animate-bounce'/>
        <h1 className='text-white text-3xl'>Welcome</h1>
        </div>
        
        <div className='bg-white h-120 w-200 rounded-l-[110px]'>
          <div className='flex justify-end w-70 h-8 p-1 bg-blue-700 rounded-2xl text-white gap-10 mt-8 ml-125'>
          <h1>Patient</h1>
          <h1>Doctor</h1>
          <h1>Receptionist</h1>
          </div>
          <div>
            <h2 className='ml-70 mt-2 text-[clamp(1.5rem,2vw,3rem)] '>Register as a Patient</h2>
            <form action="">
              <div className='grid grid-cols-2 gap-8 mx-10 mt-10'>
              <div className='grid gap-4'>
              <input type="text"
              name='name'
              placeholder='First Name*'
              className='rounded-lg border h-8 px-2' />
              
              <input type="text"
              name='name'
              placeholder='Last Name*'
              className='rounded-lg border h-8 px-2' />

              <input type="text" 
              name='Email'
              placeholder='Your Email*'
              className='rounded-lg border h-8p-2'/>
              </div>

              <div className='grid gap-4'>
                
                <input type="text"
                name=''
                placeholder='Your Phone*'
                className='rounded-lg border h-8' />

                <input type="text" 
                name='Password'
                placeholder='Password'
                className='rounded-lg border h-8'/>

                <input type="text" 
                name=''
                placeholder='Confirm Password'
                className='rounded-lg border h-8'/> 
              </div>
              </div> 
            </form>
            <div className='flex gap-2 ml-14 my-4'>
              <input type="radio"
              name="Gender" id="" 
              value="Male"
              onChange={(e)=> setGender (e.target.value)}
              checked = {gender==="Male"}/>
              <span>Male</span>
              <input type="radio" name="Gender" id=""
              value="Female" 
              onChange={(e)=> setGender (e.target.value)}
              checked ={gender==="Female"}/>
              <span>Female</span>
              </div>
              <div className='ml-14 flex justify-between mx-20'>
                <Link href="#" className='text-blue-700 hover:underline'>Already Have an Account?</Link>
                <a href="#" className='text-blue-700 hover:underline'>Already Have an Account?</a>
                <button className='border h-10 w-38 bg-blue-600 text-white font-bold rounded-full'>Register</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default registrationform
