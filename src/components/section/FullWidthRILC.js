import Link from 'next/link'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function FullWidthRILC() {
  return (
    <section id="right-image-fullwidth-section" style={{ backgroundImage: 'url("/assets/sample-6.jpg")' }}>
        <div className="h-[130px]"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-16 justify-between p-10 rounded-3xl overflow-hidden">
            <div className="w-full lg:w-1/2 text-black flex flex-col justify-start h-auto">
            </div>
            <div className="w-full lg:w-1/2 text-black flex flex-col justify-start h-auto pl-12">
              <h2 className="text-white text-4xl font-bold ledding-normal">Forknox powers <br /> modern cloud infrastructure and <br /> secure data centers.</h2>
              <p className="text-white mt-5">Scalable, high-performance solutions designed for enterprises, tech teams, and mission-critical workloads.</p>
                <div className="mt-5">
                          <Link href="#" className='text-white  border-b-2 border-white text-[16px] inline-block'>
                            Learn more
                          </Link>
                          <KeyboardArrowRightIcon className="text-white"></KeyboardArrowRightIcon></div>
                      </div>
            </div></div>
        <div className="h-[130px]"></div>
      </section>
  )
}
