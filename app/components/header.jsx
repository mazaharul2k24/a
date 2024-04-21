import React from 'react'
import { HeaderSection } from '../lib/mazadev'
import Link from 'next/link'
import Image from 'next/image'
import SiteLogo from '@/public/Dev-maza.png'

export default function header() {
  return (
    <header className='bg-[#131b2f] py-1 mb-4  '>
        <div className="headerWrapper items-center grid grid-cols-4  w-[90%] mx-auto text-white ">
            <Link href={'/'} className="leftLogo col-span-1">

                <Image  alt='siteImage' src={HeaderSection.site_logo} width={180} height={100}></Image>

            </Link>
            <div className="rightMenu col-span-3 mr-0 mx-auto ">
                <ul className='flex items-center gap-6 '>
                  <button className='border border-gray-600  p-1 rounded-full'>
                    <Link href={'/login'}>
                    <Image alt='siteImage' src={HeaderSection.header_right_icon} width={35} height={35}></Image>
                    </Link>
                 

                  </button>
                    {/* {HeaderSection.site_menu.map((val)=>(
                        <li key={val}><Link href={`/${val}`}>{val}</Link></li>

                    ))}
                     */}
                </ul>
            </div>
        </div>
        

    </header>
  )
}
