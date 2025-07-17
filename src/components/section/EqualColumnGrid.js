'use client'
import React from 'react';

export default function EqualColumnGrid({data}) {
  const gridContent = data.cards?.find(item => item.subcards)?.subcards || [];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {data.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {data.description}            
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridContent.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl overflow-hidden shadow-sm group aspect-[1/1] flex items-end p-4 "
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 text-white text-left w-full bottom-[-56px] group-hover:bottom-0 transition-all duration-300 ease-in-out">
                <h2 className="text-lg font-semibold text-[28px]">{card.title}</h2>
                <p className="text-sm mb-3">{card.description}</p>
                <button className="back-btn bg-white inline-flex items-center mt-2 text-black mt-4">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
