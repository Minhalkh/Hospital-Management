import React from 'react'

function receptionist() {
  return (
    <div className=''>
      <h2 className='ml-70 mt-2 text-[clamp(1.5rem,2vw,3rem)] '>Login As Admin</h2>
                    <form action="">
                      <div className='grid grid-cols-2 gap-8 mx-20 mt-10'>
                      <input type="text"
                      name='name'
                      placeholder='User Name*'
                      className='rounded-lg border h-8 px-2' />
                      
                      <input type="text"
                      name='name'
                      placeholder='Password*'
                      className='rounded-lg border h-8 px-2' />

    </div>
    <div>
      <button className='h-10 w-40 mt-10 text-white rounded-full bg-blue-700 mb-20 ml-[530px]'>Login</button>
    </div>
    </form>
    </div>
  )
}

export default receptionist
