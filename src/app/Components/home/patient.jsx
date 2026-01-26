"use client"
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../../../public/assets/images/ambulance1.png'
import Doctor from './doctor'
import Receptionist from './receptionist'
import Link from 'next/link'


function Patient() {
    const [gender, setGender] = useState ("")
    const [options, setOptions] = useState(1)
  return (
     <div className='flex justify-between my-14 mx-8'>
        <div className='flex flex-col gap-4 my-28 ml-30'>
        <Image src={Logo} alt='Logo' className='size-14 ml-8 animate-bounce'/>
        <h1 className='text-white text-3xl'>Welcome</h1>
        </div>
        
        <div className='bg-white w-200 rounded-l-[100px]'>
          <div className='w-64 h-9 bg-blue-700 ml-127 mt-4 rounded-full'>
          <div className='p-1 text-white flex justify-around'>
          <button className={`${options==1 ? 'selected-option' : 'cursor-pointer'}`} onClick={()=>setOptions(1)}>Patient</button>
          <button className={`${options==2 ? 'selected-option' : 'cursor-pointer'}`} onClick={()=>setOptions(2)}>Doctor</button>
          <button className={`${options==3 ? 'selected-option' : 'cursor-pointer'}`} onClick={()=>setOptions(3)}>Receptionist</button>
          </div>
        </div>

        {
        options==1 && <div>
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
                      className='rounded-lg border h-8 px-2'/>
                      </div>

                      <div className='grid gap-4'>
                        
                        <input type="text"
                        name=''
                        placeholder='Your Phone*'
                        className='rounded-lg border h-8 px-2' />

                        <input type="text" 
                        name='Password'
                        placeholder='Password*'
                        className='rounded-lg border h-8 px-2'/>

                        <input type="text" 
                        name=''
                        placeholder='Confirm Password*'
                        className='rounded-lg border h-8 px-2'/> 
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
                      <div className='ml-14 flex mb-28 justify-between mx-20'>
                        <Link href="#" className='text-blue-700 hover:underline'>Already Have an Account?</Link>
                        <button className='border h-10 w-38 bg-blue-600 text-white font-bold rounded-full cursor-pointer'>Register</button>
                      </div>
                  </div>
        }

       {options==2 && <Doctor/>} 
       {options==3 && <Receptionist/>}  
        </div>
      </div>
  )
}

export default Patient
