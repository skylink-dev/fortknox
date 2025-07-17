'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const bannerImages = [
  { id: 1, src: '/assets/powering-digital-growth-with-smart-infrastructure-data-center.jpg', alt: 'Banner 1' },
  { id: 2, src: '/assets/powering-digital-growth-with-smart-infrastructure-data-center.jpg', alt: 'Banner 2' },
  { id: 3, src: '/assets/powering-digital-growth-with-smart-infrastructure-data-center.jpg', alt: 'Banner 3' },
  { id: 4, src: '/assets/powering-digital-growth-with-smart-infrastructure-data-center.jpg', alt: 'Banner 4' },
  { id: 5, src: '/assets/powering-digital-growth-with-smart-infrastructure-data-center.jpg', alt: 'Banner 5' },
];

export default function SingleBanner({data}) {
  console.log(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 lg:px-20 mb-12 scroll-my-20 pt-6">
      <div className="bg-red-600 grid md:grid-cols-2 gap-10 max-w-screen-2xl mx-auto rounded-2xl items-center px-6 py-20 lg:p-36 linear-gradient">
        
        {/* Auto Slider Section */}
        <div className="relative w-full h-120 overflow-hidden rounded-xl">
          {bannerImages.map((img, index) => (
            <Image
              key={img.id}
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 rounded-xl ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>

        {/* Text Content Section */}
        <div>
          <h5 className="text-white mb-0 text-[24px]">{data.sub_title}</h5>
          <h2 className="text-white font-bold relative mb-4 text-[60px]">
            {data.title}
            <span className="absolute -top-2 ml-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full blur-sm" />
          </h2>
          <h5 className="text-purple-200 text-lg max-w-xl mb-6 text-[24px]">
            {data.description}
          </h5>

          <a
            href={data.button_link}
            className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 transition-all text-sm font-medium"
          >
            {data.bottom_text}
          </a>
        </div>
      </div>
    </section>
  );
}
