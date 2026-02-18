'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHospital, faTableList, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

function appointment() {
  const [ourServices, setOurServices] = useState ([
    {
      icon : faCheck,
      title : 'Make an Appointment',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.',
    },
    {
      icon : faTableList,
      title : 'Choose Your Package',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.',
    },
    {
      icon : faUserDoctor,
      title : 'Help By Specialist',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.',
    },
    {
      icon : faHospital,
      title : 'Get Diagnostic Report',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestias quis maxime modi.',
    },
  ])
  return (
      <div className=''> 
            <div className='flex justify-between items-center mx-28 mt-28'>
              {ourServices.map((items, index)=>{
                return(
                 <div key={index} className='flex flex-col items-center gap-4'>
                  <FontAwesomeIcon icon={items.icon} size='3x'/>
                  <h1 className='font-semibold text-2xl'>{items.title}</h1>
                  <p className='text-center'>{items.desc}</p>
                 </div>
                )
              })}
            </div>
          </div>
  )
}

export default appointment