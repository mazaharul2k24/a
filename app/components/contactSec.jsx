import React from 'react'
import { PhoneIcon,ArrowDownIcon,UserCircleIcon ,AtSymbolIcon ,MapPinIcon  } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { contactSection } from '../lib/mazadev'
export default function contactSec() {
  return (
    <div className='text-white   py-20 px-5'>
      <h1 className='mb-9 md:w-[50%] mx-auto  text-center text-3xl text-blue-600 py-3 font-semibold'>{contactSection.section_name}</h1>
      <div className="md:grid grid-cols-2 items-center">
        <div className="leftContactInfo col-span-1 leading-9">
          <Image alt='siteImage3' width={500} className='rounded-md  ' height={500} src={contactSection.contact_photo}></Image>

          {/* <h1 className='w-[90%] my-2 py-1 px-3  flex items-center gap-2'><UserCircleIcon  className='w-[25px] text-blue-600'/> {contactSection.contacter_name}</h1>
          <h1 className=' w-[90%] my-2 py-1 px-3  flex items-center gap-2'><PhoneIcon className='w-[25px] text-blue-600'/> {contactSection.contact_phone}</h1>
          <h1 className=' w-[90%] my-2 py-2 px-3  flex items-center gap-2'><AtSymbolIcon className='w-[25px] text-blue-600'/> {contactSection.contact_email}</h1>
          <h1 className=' w-[90%] my-2 py-2 px-3  flex items-center gap-3'><MapPinIcon className='w-[30px] text-blue-600'/> {contactSection.contact_addr}</h1>
           */}
      
        </div>
        <div className="rightSectioncontact col-span-1">
        {contactSection.contact_box.map((box)=>(
          <div key={box.type} className="contactBoxwr grid grid-cols-1 md:w-[80%] mx-auto my-3">
              <input className='py-2 px-3 border outline-0 my-1 border-[#292d57] bg-[#1d1f31] shadow-md shadow-[#0d1016] rounded-md' type={box.type} name={box.name} placeholder={box.placeholder}  />
          </div>
          ))}

          <input type={contactSection.submitBtn.type} value={contactSection.submitBtn.value} name={contactSection.submitBtn.name} className= ' bg-blue-700 text-white py-2 px-16 block mt-3 ml-16 rounded-md cursor-pointer shadow-md  hover:bg-blue-800 hover:border-blue-800'/> 

        </div>
      </div>
  
    </div>
  )
}
