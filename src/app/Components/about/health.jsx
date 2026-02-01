import React from 'react'
import img1 from '../../../../public/assets/images/img-1.png'
import Image from 'next/image'

function health() {
  return (
      <div className='mt-20 flex justify-around mx-[80px]'>
            <div>
            <h1 className='text-4xl'>GLOBAL HOSPITALS</h1>
            <p className='text-3xl mt-2'>Provide best quality health care for you</p>
      
            <div className='mt-12'></div>
      
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
