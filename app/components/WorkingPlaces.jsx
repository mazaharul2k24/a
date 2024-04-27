import React from 'react'
import { workingPlaceSection } from '../lib/mazadev'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkingPlaces() {
  return (
    
    <>

    <div className="workpMian  text-white md:py-20  border  border-[#1f202c] shadow-md shadow-[#0d1016] rounded-md">
      <div className="workPwrapper md:grid p-5 grid-cols-5 items-center">
            <div className="workPLefiside col-span-3 md:w-[75%] mx-auto mb-12">
              <h1 className='text-blue-500 font-semibold text-3xl py-2  rounded-md w-full md:w-[50%] mb-3 '>{workingPlaceSection.work_place_title}</h1>
              <p className='text-gray-400 py-2 mb-5'>{workingPlaceSection.work_place_desc}</p>
              <Link target='_blank' href={'https://www.facebook.com/mazaharul2k24'} className='bg-blue-700 py-3 px-12 hover:bg-blue-800  shadow-md rounded-sm'>Let's Go</Link>
              
        </div>
        <div className="workPrightSide col-span-2  ">
        
           <div className="wpWr md:grid grid-cols-2 gap-3">
           {workingPlaceSection.work_placs.map((e)=>(
                <Link href={e.sociallink} target='_blank' key={e.name} className="mb-2 md:mb-0 wordPsBowrapper  items-center flex py-4 px-3 gap-3 border  border-[#262734] shadow-md shadow-[#0d1016] rounded-md  ">
               <div className="ImageWp ">
               <Image alt='workplaces image' className='rounded-md' width={50} height={50} src={e.icon}></Image>
               </div>
                <div className="wwptdwrapper">
                <h2 className='text-gray-300 text-xl font-semibold'>{e.name}</h2>
                  <p className='text-sm text-gray-400 text-md'>{e.sm_desc}</p>
                </div>
                  </Link>

            ))}
           </div>
     
    

        </div>
      </div>
    </div>
    </>
  )
}
