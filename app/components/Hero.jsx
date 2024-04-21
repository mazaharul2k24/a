import React from 'react'
import { HeroSection } from '../lib/mazadev'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='text-white '>
        <div className="heroWrapper md:grid grid-cols-3 w-full block md:py-[45px] px-3">
            <div className="leftHero leading-5 col-span-1 mt-12">
                <h4 className='text-blue-400 font-semibold py-1'>{HeroSection.sm_title}</h4>
                <h1 className='font-bold text-4xl py-1 inline-flex'>{HeroSection.xl_tittle}<p className='text-blue-500'>...</p></h1>
                <h2 className='text-xl font-semibold text-gray-300 py-2'>{HeroSection.md_title}</h2>
                <p className=' text-md text-gray-400 leading-6'>{HeroSection.desc}</p>
                <div className="actionBtn mt-3 flex ">
                    <Link href={'/signup'} className='bg-blue-700 w-full text-white py-3 text-center mr-5 my-3 rounded-sm shadow-md  hover:bg-blue-800 hover:border-blue-800'>{HeroSection.action_btn.btn1}</Link>
                    <button className='border border-1 w-full border-blue-400 text-center  my-3 mr-4 rounded-sm shadow-md hover:bg-blue-800 hover:border-blue-800'>{HeroSection.action_btn.btn2}</button>
                
                </div>

            </div>
            <div className="rightHeroImage col-span-2 text-center mx-auto mt-12">
                <Image className='rounded-full shadow-lg shadow-blue-500' width={500} height={500} src={HeroSection.right_image}></Image>

                </div>
        </div>

    </section>
  )
}
