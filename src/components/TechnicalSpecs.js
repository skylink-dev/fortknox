'use client'
import React from 'react';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

const specs = [
  {
    category: 'Old-School Struggles',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      'Manually logging hours',
      'Juggling multiple tools',
      'Missing out on insights',
      'Tedious reporting'
    ],
    color: 'bg-gradient-to-br from-gray-400 to-gray-500'
  },
  {
    category: 'New-School Solutions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      'All-in-one time tracking',
      'Automatic time entries',
      'Smart insights with AI',
      'Instant updates across devices'
    ],
    color: 'bg-gradient-to-br from-red-500 to-red-600'
  }
];
const TechnicalSpecs = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50" id="technical-specs">
            <div className="h-[80px]"></div>
      <div className=" max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Out with the old,<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600"> in with the new.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`rounded-xl overflow-hidden duration-300 ${index === 0 ? "bg-red-100" : "bg-red-600"} `}
            >
              <div className="p-6">
                <div className="rounded-lg flex items-center justify-center text-white mb-4 gap-4">
                  <h3 className={`text-2xl font-bold ${index === 0 ? "text-black" : "text-white"} `}>{spec.category}</h3>
                </div>
                <ul className="space-y-3 bg-white rounded-lg p-5">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-4 py-1">
                      <div className={`${index === 0 ? "bg-gray-500" : "bg-red-500"} text-white text-xl w-8 h-8 flex items-center justify-center rounded-full border border-black`}>  {index === 0 ? <CloseIcon fontSize="small" /> : <DoneIcon fontSize="small" />}</div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-black px-12 py-16 text-white add-noise">
            <div className='content-wrap'>
            <h3 className="text-4xl font-bold mb-2">Be a Goal-getter.</h3>
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
        </motion.div>
      </div>
      <div className="h-[80px]"></div>
    </section>
  );
};

export default TechnicalSpecs;