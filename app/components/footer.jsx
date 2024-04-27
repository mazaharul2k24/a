import React from 'react'
import Image from 'next/image'
import { footerSection } from '../lib/mazadev'
import Link from 'next/link'

export default function footer() {
  return (
    <div className='footermain text-center bg-[#1f232c] pt-14 pb-3 rounded-md shadow-slate-700'>
        <Link href={'/'} className="web_logoSection mx-auto block">
            <Image alt='footer image' className='mx-auto' src={footerSection.f_logo} width={200} height={100} ></Image>
        </Link>

<div className="socilLinksfooter flex w-[21%] md:w-[9%]  mx-auto py-2 ">
    {footerSection.footer_social_icons.map((a)=>(
        <Link target='_blank' key={a.icon_url} href={a.icon_url}>
            <Image width={100} height={100}   alt='siteImage' src={a.icon_img} ></Image>
        </Link>
    ))}
</div>

        <div className="otherInfo text-gray-400">
            {footerSection.footer_pages.map((e)=>(
                <ul key={e}>
                    <li className='text-gray-300'><Link href={e.page_link}>{e.page_name}</Link></li>
                </ul>
            ))}
            <div className="webMakerInfo">
                <p className='text-gray-500 mt-4'>{footerSection.web_maker_info}</p>
            </div>
        </div>

    </div>
  )
}
