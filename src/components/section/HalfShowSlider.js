'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function HalfShowCarousel({ slides = [] }) {
  const slidescontent = slides;
  const baseSlides = slidescontent;
 const loopSlides = baseSlides.length > 1
    ? [baseSlides[baseSlides.length - 1], ...baseSlides, baseSlides[0]]
    : baseSlides;

  const [index, setIndex] = useState(1); // start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  const slideWidth = 60;
  const slideGap = 5;

  const goToSlide = (newIndex) => {
    setIndex(newIndex);
    setIsTransitioning(true);
  };

  const handleDotClick = (dotIndex) => {
    goToSlide(dotIndex + 1); // offset by 1 due to loopSlides
  };

  useEffect(() => {
    if (!isTransitioning) return;
   const track = trackRef.current;
    if (!track) return; 
      const handleTransitionEnd = () => {
      if (index === 0) {
        setIsTransitioning(false);
        setIndex(baseSlides.length);
      } else if (index === loopSlides.length - 1) {
        setIsTransitioning(false);
        setIndex(1);
      }
    };
    track.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [index, isTransitioning, baseSlides.length, loopSlides.length]);

  if (!baseSlides.length) return null; // safeguard

  return (
    <section className="w-full pt-3 pb-8">
      <div className="relative overflow-hidden max-w-[100vw] px-4">
        <div
          ref={trackRef}
          className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            width: `${loopSlides.length * (slideWidth + slideGap)}vw`,
            transform: `translateX(calc(-${index * (slideWidth + slideGap)}vw + 20vw))`,
          }}
        >
          {loopSlides.map((slide, i) => (
            <div
              key={`${slide.id}-${i}`}
              className="w-[60vw] mx-[6px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md relative"
            >
              <div
                className="w-full h-120 bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-white z-10 w-[40%]">
                <h3 className="font-semibold text-[40px]">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2 dot-wrap">
          {baseSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-3 w-3 rounded-full ${
                index - 1 === i ? 'bg-red-600 active' : 'bg-gray-300'
              } transition`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
