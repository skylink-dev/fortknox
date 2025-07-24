import Link from 'next/link'
import React from 'react'

export default function FullWidthCard() {
    return (
        <section style={{ backgroundColor: "#111B21" }}>
            <div className="mx-auto max-w-[1080px] px-4">
                <div className="h-[110px]"></div>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-white mb-4">
                        Where innovation has no limitations.
                    </h1>
                    <p className="text-[18px] leading-[26px] text-white mb-8">
                        From scaling startups to global enterprises, see how companies are
                        building customer experiences that matter with FortKnox Data Center.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-lg shadow-lg overflow-hidden mt-8 min-h-[400px]">
                    <div className="w-full lg:w-1/4 p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="text-left">
                                <h3 className="text-4xl font-bold text-red-600">99.9%</h3>
                                <p className="text-7xl text-gray-600 mt-2">Uptime Guarantee</p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-4xl font-bold text-red-600">24/7</h3>
                                <p className="text-7xl text-gray-600 mt-2">Monitoring & Support</p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-4xl font-bold text-red-600">100+</h3>
                                <p className="text-7xl text-gray-600 mt-2">Global Clients</p>
                            </div>
                        </div>
                        <div className="mt-8 text-left">
                            <button className="text-xs bg-white hover:bg-red-700 border text-black px-3 py-2 rounded">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4 relative card-gradient-customize">
                        <img
                            src="/assets/sample-4.webp"
                            alt="Data Center"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-40 px-8 py-8">
                            <h2 className="text-white text-2xl font-semibold mb-3 drop-shadow-lg">
                                Forknox Cloud empowers businesses to scale effortlessly and deliver seamless digital experiences worldwide.
                            </h2>
                            <Link href="#" className="text-white border-b-2 border-red-500 text-[16px] inline-block">
                                Read Fortknox Story
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-[110px]"></div>
            </div>
        </section>
    )
}
