"use client";
import React from 'react'
import Navlink from './Navlink'

const Menuoverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link,index)=>(
            <li key={index}>
                 <Navlink href={link.href} title={link.title}/>
            </li>
           
        ))
    }
        
    </ul>
  )
}

export default Menuoverlay
