'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function InnerBanner({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) return null;

  const { image, title, description } = slides[current];

  return (
    <section className="inner-page-banner relative w-full h-[450px] md:h-[300px] lg:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          width={4956}
          height={781}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content with Framer Motion animation */}
      <div className="relative z-10 container mx-auto px-4 flex justify-between items-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="max-w-[600px] md:max-w-[420px]"
          >
            <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-4">{title}</h1>
            <p className="text-white text-base md:text-lg leading-snug">{description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-black' : 'bg-gray-400'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </section>
  );
}
