'use client'
import React from 'react'
import img1 from '../../../../public/assets/images/img-1.png'
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function health() {
  const [health, setHealth]= useState([
    {
      title : 'Affordable monthly premium packages',
      desc : 'Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis'
    },
    {
      title : 'Choose your favourite services',
      desc : 'Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis'
    },
    {
      title : 'Only use friendly environment',
      desc : 'Lorem ipsum dolor sit amet, in verterem persecuti vix, sit te meis'
    },
  ])
  return (
      <div className='mt-20 flex justify-around mx-[80px]'>
            <div>
            <h1 className='text-4xl'>GLOBAL HOSPITALS</h1>
            <p className='text-3xl mt-2'>Provide best quality health care for you</p>
      
            <div className='mt-12'>
              <div className=''>
                {health.map((items,index)=>{
                  return(
                    <div key={index} className='flex gap-3'>
                      <div className=''>
                        <FontAwesomeIcon icon={faCheck} size='xl' className='text-green-400' />
                      </div>
                      <div>
                        <h1 className='font-bold'>{items.title}</h1>
                        <p className='mb-4'>{items.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
      
            <button className='bg-white text-blue-700 ml-77 mt-7 p-2 rounded'>LEARN MORE
            </button>
            
            </div>
            <div>
              <Image src={img1} alt='doctor' className='w-[565px]'/>
            </div>
          </div>
  )
}

export default health
