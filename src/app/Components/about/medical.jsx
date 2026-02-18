import React, { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img6 from '../../../../public/assets/images/img-6.png'
import { faBrain, faFilter, faHeartPulse, faHospital, faSquare, faSquarePlus, faStethoscope, faWheelchair } from '@fortawesome/free-solid-svg-icons'

function medical() {
  const [medical,setMedical] = useState([
    {
      icon: faStethoscope,
      title:'Medical checkup',
      desc:'Vestibulum tincidunt enim in pharetra malesuada.',
    },
    {
      icon: faHospital,
      title:'Gyn Care',
      desc:'Vestibulum tincidunt enim in pharetra malesuada.',
    },
    {
      icon: faWheelchair,
      title:'Nursing Services',
      desc:'Vestibulum tincidunt enim in pharetra malesuada.',
    },
    {
      icon: faBrain,
      title:'Neurology',
      desc:'Vestibulum tincidunt enim in pharetra malesuada.',
    },
    {
      icon: faSquarePlus,
      title:'Pharmacy',
      desc:'Vestibulum tincidunt enim in pharetra malesuada.',
    },
    {
      icon: faHeartPulse,
      title:'Sleep Center',
      desc:'Vestibulum tincidunt enim in pharetra malesuada.',
    }
  ])
  return (
      <div className='flex justify-around mt-20 px-24'>
      <div>
        <Image src={img6} alt='BoyDoctor' className='w-[400px] ml-20'/>
      </div>
      <div className='grid grid-cols-2 gap-x-12 max-w-[600px]'>
        {medical.map((items,index)=>{
          return(
            <div key={index}>
              <div className='flex gap-8'>
                <div>
                  <FontAwesomeIcon icon={items.icon} size='2x'/>
                </div>
                <div>
                  <strong>{items.title}</strong>
                  <p>{items.desc}</p>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default medical