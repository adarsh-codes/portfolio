"use client"
import React from 'react'
import Servicetag from './Servicetag'

const Services = () => {

    const serv = [
        {
            logo : "</>",
            title : "Web Development",
            desc : "I offer professional web development services, creating responsive and visually appealing websites tailored to your business needs. From design to deployment, I ensure seamless user experience and functionality, incorporating the latest technologies and trends. Let's build your online presence and drive your success together. Reach out for a consultation today!"
        },
        {
            title : "BackEnd Development",
            desc : ""
        }
    ]
  return (
    <section id='services'>
      <h2 className='text-white text-4xl text-center py-5'>My Services</h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {serv.map((s,index) => (
          <li key={index}>
          <Servicetag logo={s.logo} title={s.title} desc={s.desc}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
