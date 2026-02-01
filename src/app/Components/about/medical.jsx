import React from 'react'
import Image from 'next/image'
import img6 from '../../../../public/assets/images/img-6.png'

function medical() {
  return (
      <div className='flex justify-around mt-20 px-24'>
      <div>
        <Image src={img6} alt='BoyDoctor' className='w-[400px] ml-20'/>
      </div>
      <div className='grid grid-cols-2 gap-x-12 max-w-[600px]'>
        <div>
        <h1 className='text-xl'>Medical checkup</h1>
        <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
        </div>
        <div>
          <h1 className='text-xl'>Gyn Care</h1>
        <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
        </div>
        <div>
          <h1 className='text-xl'>Nursing Services</h1>
        <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
        </div>
        <div>
          <h1 className='text-xl'>Neurology</h1>
        <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
        </div>
        <div>
          <h1 className='text-xl'>Pharmacy</h1>
        <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
        </div>
        <div>
          <h1 className='text-xl'>Sleep Center</h1>
        <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
        </div>
      </div>
    </div>
  )
}

export default medical
