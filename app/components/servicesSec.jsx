import React from 'react'
import { servicesSection } from '../lib/mazadev'
import Image from 'next/image'

export default function servicesSec() {
  return (
    <>
      <div className="serviceMian   py-10 md:py-20 md:px-3 ">
      <div className="serviceHead text-white pb-9  md:mt-8">
            <h1 className='border text-blue-500  border-[#292d57] md:shadow-md md:shadow-[#0d1016] rounded-md md:w-[50%] w-full mx-auto   text-xl text-center md:text-3xl  py-3 font-bold md:font-semibold'>{servicesSection.service_title}</h1>
    
        </div>
        <div className="serviceBoxes md:grid grid-cols-3 text-white gap-3 ">
            {servicesSection.servicesBox.map((service)=>{
                return   <div key={service.service_name} className="serviceSingleBox mb-5 md:mb-2 border border-[#1f202c] shadow-md shadow-[#0d1016] rounded-md py-7 px-4 text-center  ">
                    <Image alt='siteImage' src={service.service_image} width={70} height={70} className='block mx-auto py-2'></Image>
                    <h1 className='text-xl font-semibold py-2'>{service.service_name}</h1>
                        <p className='text-gray-400  leading-6 text-justify'>{service.service_desc}</p>                

                </div>
            })}
          
        </div>
      </div>

    </>
  )
}
