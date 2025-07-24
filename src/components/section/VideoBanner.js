'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoBanner({ data }) {
  const [showContent, setShowContent] = useState(true);
  const videoRef = useRef(null);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    setShowContent(true);
  };
  const handlePlay = () => {
    setShowContent(false)
  }

  return (
    <>
      <div className="h-[110px]"></div>
      <section className="relative h-[800px] overflow-hidden bg-black container mx-auto rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${data.image}')` }}
        >
          {!showContent && (
            <video
              key="video"
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover z-0"
              playsInline
              autoPlay
              muted
              onEnded={() => setShowContent(true)}
              style={{ backgroundColor: 'black' }}
            >
              <source src={data.video} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0" />
        </div>
        {!showContent && (
          <button
            onClick={handleClose}
            aria-label="Close Video"
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center"
          >
            <svg height="20" width="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="relative z-10 container mx-auto flex flex-wrap items-center justify-center h-full text-white px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
              </div>
              {showContent && (
                <button
                  onClick={handlePlay}
                  aria-label="Play Video"
                  className="absolute z-10 inset-0 m-auto w-16 h-16 bg-white/80 rounded-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="black" width="32" height="32">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
              <div className="w-full md:w-2/3 text-center md:text-center py-10">
                <p className="text-lg sm:text-xl font-semibold uppercase tracking-widest">
                  {data.sub_title}
                </p>
                <h1 className="mt-2 mb-4 text-4xl sm:text-5xl font-bold leading-tight">
                  {data.title}
                </h1>
                <p className="text-center sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  {data.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <div className="h-[110px]"></div>
    </>
  );
}
