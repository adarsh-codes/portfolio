"use client"
import React from 'react'
import Link from 'next/link'

const Servicetag = ({logo,title,desc}) => {
  return (
    <div className="p-5 border transition cursor-pointer rounded-lg ease-in-out delay-150 bg-gradient-to-b from-red-400 to-slate-400 hover:-translate-y-1 hover:scale-110 hover:to-red-500 duration-300 ..."  href='/'>
      <div className='text-white text-4xl'>{logo}</div>
      <div className='text-white text-3xl font-bold py-5'>{title}</div>
      <div className='text-white'>{desc}</div>
    </div>
  )
}

export default Servicetag
