import Image from 'next/image'
import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import DoneIcon from '@mui/icons-material/Done';

export default function DynamicGrid4() {
    return (
        <section className="dynamic-grid" style={{ backgroundColor: "#FCF5EB" }}>
            <div className="mx-auto max-w-[1080px] px-4">
                <div className="h-[110px]"></div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-black leading-normal mb-4">
                        A leader in digital engagement <br />
                        for government and higher education
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-16 mt-10">
                    <div className="w-full lg:w-1/2">
                        <div className="resources-item-grid">
                            <div className="resources-item">
                                <Image src="/assets/sample-5.jpg" width={800} height={400} alt="sample"></Image>
                                <span className="resources-item-icon">
                                    <CallMadeIcon className='text-white'></CallMadeIcon>
                                </span>
                            </div>
                            <div className="resources-item">
                                <Image src="/assets/sample-5.jpg" width={800} height={400} alt="sample"></Image>
                                <span className="resources-item-icon">
                                    <CallMadeIcon className='text-white'></CallMadeIcon>
                                </span>
                            </div>
                            <div className="resources-item">
                                <Image src="/assets/sample-5.jpg" width={800} height={400} alt="sample"></Image><span className="resources-item-icon">
                                    <CallMadeIcon className='text-white'></CallMadeIcon>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h4 className="text-3xl font-semibold text-gray-800">
                            Explore resources and turnkey solutions
                        </h4>
                        <p className="text-black leading-relaxed text-[18px] leading-[25px]">
                            Public service agencies trust Forknox to power the digital shift and provide resources for any mission-critical applications.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-4 text-gray-700 my-7">
                                <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full"><DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                                Secure, simple-to-use platform
                            </li>
                            <li className="flex items-center gap-4 text-gray-700 my-7">
                                <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full">  <DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                                Convenient apps that deploy quickly
                            </li>
                            <li className="flex items-center gap-4 text-gray-700 my-7">
                                <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full"><DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                                Customizable to your unique needs
                            </li>
                            <li className="flex items-center gap-4 text-gray-700 my-7">
                                <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full"><DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                                Flexible pricing
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-[110px]"></div>
            </div>
        </section>
    )
}
