'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

export default function ThreeBannerImage({ data }) {
    const cards = data?.cards || [];

    return (
        <section id="three-banner-image" className="bg-white relative">
            <div className="h-[110px]"></div>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        {data?.sub_title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        {data?.description}
                    </p>
                </div>
                <div className="grid gap-8">
                    {cards[0] && (<motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="bg-black px-12 py-16 text-white add-noise">
                            <div className='content-wrap'>
                                <h3 className="text-4xl font-bold mb-2">  {cards[0]?.sub_title}</h3>
                                <p className="text-3xl text-white">Now its easy to show how awesome you are at your job.</p>
                                <Link href="#" className="mt-5 inline-block px-5 py-3 rounded-lg text-white font-medium shadow-md transition hover:scale-105" style={{
                                    background: 'linear-gradient(100deg, #40ddff -6.08%, #7612fa 25.08%, #fa12e3)'
                                }}>Get Started. It is Free
                                    <EastIcon></EastIcon>
                                </Link>
                            </div>
                            <div className="image-wrap">
                                <Image src="/assets/glow-vector.png" width={1200} height={600} alt="glow-vector"></Image>
                                <Image src="/assets/noise-wide.png" width={1200} height={600} alt="glow-vector"></Image>
                            </div>
                        </div>
                    </motion.div>)}

                    {/* Bottom Two Banners */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {cards.slice(1, 3).map((card, index) => (
                            <div
                                key={index}
                                className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-[1.02] bg-red-100 border  border-[#FFB5B5]">
                                <div className="absolute flex flex-col items-start justify-start p-7 w-[500px]">
                                    <h3 className="text-black text-md md:text-3xl font-semibold">
                                        {card?.sub_title}
                                    </h3>
                                    <p className="mt-2">Instantly switch between 15 views including list, board, gantt, and more.</p>
                                    <Link href="#" className="mt-5 inline-block px-5 py-3 rounded-lg text-white font-medium shadow-md transition hover:scale-105" style={{
                                        background: 'linear-gradient(100deg, #40ddff -6.08%, #7612fa 25.08%, #fa12e3)'
                                    }}>Get Started. It is Free
                                        <EastIcon></EastIcon>
                                    </Link>
                                </div>
                                <Image src="/assets/icon-round.svg" width={1200} height={600} alt="iconround" className="text-transparent absolute w-[250px] right-[45px] bottom-[35px]"></Image>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-[110px]"></div>
        </section>
    );
}
