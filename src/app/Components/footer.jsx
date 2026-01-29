import React from 'react'

function footer() {
  return (
    <div>
        <div className='flex mx-32 gap-20 mt-20'>
        <div className='gap-10'>
      <h1 className='text-xl'>ABOUT GLOBAL HOSPITALS</h1>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet, ne nam purto nihil impetus, an facilisi accommodare sea</p></div>
      <div>
        <h1 className='text-xl'>GLOBAL HOSPITALS</h1>
        <p className='text-gray-400'>Nam leo lorem, tincidunt id risus ut, ornare tincidunt naqunc sit amet.</p></div>
        <div>
            <h1 className='text-xl'>OUR LOCATION</h1>
            <p className='text-gray-400'>The Suithouse V303, Kuningan City, Jakarta Indonesia 12940</p>
        </div>
        </div>
        <div className='flex justify-around items-center mt-10'>
            <div className=''>
                <h1 className='text-xl'>INFORMATION</h1>
                <ul>
                    <li>Home</li>
                    <li>Laboratory</li>
                    <li>Medical Treatment</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li> Monday - Saturday, 8am to 10pm</li>
                    <li> +62 0888 904 711</li>
                    <li> global@hospitals.com</li>
                </ul>
            </div>
            <div>
                <h1>FOLLOW US</h1>
            </div>
        </div>
    </div>
  )
}

export default footer
