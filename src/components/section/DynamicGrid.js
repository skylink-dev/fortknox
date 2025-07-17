'use client';

import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

export default function DynamicGrid({ data }) {
  if (!Array.isArray(data)) return null;

  const topCards = data.slice(0, 2);
  const fullWidthCard = data.length > 2 ? data[data.length - 1] : null;

  return (
    <section className="storage-features py-12">
      <div className="mx-auto max-w-screen-lg px-4 space-y-10">
        
        {/* Top 2 Cards in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {topCards.map((card, index) => (
            <div key={index} className="storage-feature-details">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={400}
                  className="w-full rounded-lg"
                />
              )}
              <div className="storage-feature-details-txt">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p>{card.description}</p>
                {card.button_text && (
                  <button className="back-btn needabsolute inline-flex items-center mt-2 bg-red-600 text-white">
                    {card.button_text} <EastIcon className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Last Card as Full Width */}
        {fullWidthCard && (
          <div className="storage-feature-details storage-full-width text-center">
            {fullWidthCard.image && (
              <Image
                src={fullWidthCard.image}
                alt={fullWidthCard.title}
                width={1200}
                height={400}
                className="w-full rounded-lg"
              />
            )}
            <div className="storage-feature-details-txt mt-4">
              <h2 className="text-xl font-semibold">{fullWidthCard.title}</h2>
              <p>{fullWidthCard.description}</p>
              {fullWidthCard.button_text && (
                <button className="back-btn needabsolute inline-flex items-center mt-2 bg-red-600 text-white">
                  {fullWidthCard.button_text} <EastIcon className="ml-2" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
