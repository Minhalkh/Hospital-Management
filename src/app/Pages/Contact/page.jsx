import React from 'react'

function page() {
  return (
    <div className='mx-[240px] my-[90px] w-[900px] rounded-l-[100px] rounded-r-[100px] h-[430px] bg-white'>
      <div className='ml-[340px]'>
        <h1 className=''>Drop Us a Message</h1>
        </div>
        <div className='flex justify-around items-center mt-20 mx-20'>
        <div className='grid grid-cols-1 gap-4'>
        <input type="text"
        name='name'
        placeholder='Your Name*'
        className='border rounded-full p-1' />

        <input type="text"
        name="name" 
        placeholder='Your Email*' 
        className='border rounded-full p-1'/>

        <input type="number" name="name" 
        placeholder='Your Phone Number*' 
        className='border rounded-full p-1'/>
        </div>
        <div>
          <input type="text" name='name'
          placeholder='Your Message*' 
          className='border rounded w-[290px] h-[180px]'/>
        </div>
        </div>
        <button className='w-[140px] h-[39px] font-bold ml-[370px] mt-8 bg-blue-700 text-white border rounded-full'>Send Message</button>
    </div>
  )
}

export default page
