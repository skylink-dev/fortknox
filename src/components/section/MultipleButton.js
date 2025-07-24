import React from 'react'
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

export default function MultipleButton() {
    return (
        <section
            style={{
                background: "linear-gradient(23deg,#d32525 17.81%,#d32525 83.03%)",
            }}
        >
            <div className="h-[110px]"></div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="w-full lg:w-[60%]">
                        <span className="bg-white mb-4 px-6 py-3 text-black inline-block rounded-full">
                            Cloud & Data Center Solutions
                        </span>
                        <div className="max-w-[38rem] text-left">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Forknox powers scalable <br /> cloud and infrastructure platforms
                            </h1>
                            <p className="text-[18px] leading-[26px] text-white mb-8">
                                Secure, flexible, and high-performance cloud solutions for modern enterprises. From private cloud to edge computing and colocation services, Forknox keeps your digital infrastructure always-on and future-ready.
                            </p>
                            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white px-6 py-3 text-black inline-block rounded-full"
                                    >
                                        Cloud Infrastructure <EastIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white px-6 py-3 text-black inline-block rounded-full"
                                    >
                                        Data Center Services <EastIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white px-6 py-3 text-black inline-block rounded-full"
                                    >
                                        Edge & Hybrid Cloud <EastIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white px-6 py-3 text-black inline-block rounded-full"
                                    >
                                        Backup & Disaster Recovery <EastIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white px-6 py-3 text-black inline-block rounded-full"
                                    >
                                        Network & Connectivity <EastIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="bg-white px-6 py-3 text-black inline-block rounded-full"
                                    >
                                        Explore All Solutions <EastIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-[40%]">
                        <div className="platform-img">
                            <Image
                                src="/assets/sample-6.webp"
                                width={1200}
                                height={900}
                                alt="cloud-infrastructure"
                                className="relative top-[207px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[110px]"></div>
        </section>
    )
}
