"use client"
import React from 'react'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer className='footer border border-top-[33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <Link href="/">
        <Image src={"/portfolio.png"} height={60} width={60}/>
        </Link>
        <p className='text-slate-700'>All rights reserved.</p>
      </div>
      
    </footer>
  )
}

export default Footer
