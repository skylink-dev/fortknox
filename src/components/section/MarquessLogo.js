'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MarquessLogo({data = [] }) {
  const logoItems = data?.[0]?.subcards || [];
  if (!logoItems.length) return null;
  return (
    <div className="bottom-0 left-0 w-full bg-gray-100 py-4 backdrop-blur-[5px] overflow-hidden">
      <div className="relative flex items-center">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 160,
            ease: 'linear',
          }}
        >
          {[...logoItems, ...logoItems].map((item, index) => (
            <div key={index} className="flex items-center gap-2 min-w-fit px-4">
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
              <span className="text-[#1D1D1F] text-[16px] whitespace-nowrap leading-[1.25] l:text-[12px]">
                {item.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
