import React from 'react'
import Image from 'next/image'
import { introSection } from '../lib/mazadev'

export default function IntroSec() {
  return (
    <div className='introMain text-white mt-9 border   border-[#1f202c] shadow-md shadow-[#0d1016] rounded-md '>
        <div className="intiroWrapper py-20 px-5 block md:grid grid-cols-5 gap-5  ">

            <div className="intoleftContent md:col-span-2 ">
            <Image className='rounded-full mx-auto  shadow-md shadow-blue-800' src={introSection.intro_image} width={300} height={250}></Image>
              
            </div>

            
            <div className="introRightImg col-span-3 ">
              
                <h2 className='text-2xl mt-5 font-semibold md:tex-4xl pb-3  my-2 pt-2  text-blue-500'>  {introSection.intro_title}</h2>
                <h1 className='text-gray-400 leading-6'>{introSection.intro_desc}</h1>
                <button className='bg-blue-700 text-white py-3 md:px-12 px-10  my-5 rounded-sm shadow-md  hover:bg-blue-800 hover:border-blue-800'>{introSection.intro_cv_dwn_btn}</button>

            </div>
        </div>
    </div>
  )
}

