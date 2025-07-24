'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const slides = [
  {
    image: '/assets/sample-3.png',
    title: 'Chat Anywhere',
    description: 'Connect on mobile, desktop, or tablet.',
  },
  {
    image: '/assets/sample-3.png',
    title: 'Crystal Clear Video',
    description: 'Enjoy HD video quality.',
  },
  {
    image: '/assets/sample-3.png',
    title: 'Secure Conversations',
    description: 'Your privacy is our priority.',
  },
];

export default function SliderContainer() {
  const scrollRef = useRef(null);

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="slider" style={{ overflow: 'hidden' }}>
      <div className="h-[110px]"></div>
      <div className="mx-auto max-w-[1080px] px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 justify-between">
          <div className="w-full lg:w-1/2 text-black flex flex-col justify-between h-auto">
            <div className="section-header">
              <h1 className="text-4xl font-semibold mb-4">Keep the conversation going</h1>
              <p className="text-[18px] leading-[26px] mb-6">
                Stay connected anytime, anywhere on your preferred device.
              </p>
            </div>
            {/* Custom Arrows */}
            <div className="flex gap-4 pb-5">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
              >
                <KeyboardArrowLeftIcon />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
              >
                <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>

          {/* Right Section (Slider) */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="w-full -mx-4">
              <div
                ref={scrollRef}
                className="flex scroll-smooth gap-6 pb-4 overflow-x-auto"
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] max-w-[500px] snap-start shrink-0 bg-[#f5f5f5] rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="rounded-3xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={400}
                        height={400}
                        className="w-full h-88 object-cover"
                      />
                    </div>
                    <div className="p-6 bg-white flex flex-col whitespace-wrap overflow-x-auto h-full gap-2">
                      <h3 className="text-lg font-semibold text-black mb-0">{slide.title}</h3>
                      <p className="text-gray-600 text-sm mt-0">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[110px]"></div>
    </section>
  );
}
