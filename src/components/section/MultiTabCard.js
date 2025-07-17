'use client'
import { cardData } from '@/data/home';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function MultiTabCard({cardsData = [] }) {
  const tabs = cardsData.map(card => card.title);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  useEffect(() => {
    if (tabs.length && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
    }
  }, [tabs]);

  const activeCard = cardsData.find(card => card.title === activeTab);
  const subcards = activeCard?.subcards || [];
  console.log(subcards);
  return (
    <div className="w-full px-4 py-14 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Innovative, Trustworthy, and Secure Products and Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Discover scalable, secure, and high-performance services tailored to every business need.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-sm text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-red-600 text-white border-red-600 shadow-md'
                  : 'text-gray-800 bg-red-100 hover:bg-red-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards or Coming Soon */}
        {subcards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {subcards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col items-center text-center px-6 py-12"
              >
                <div className="w-12 h-12 mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={46}
                    height={46}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-5">{card.description}</p>
                <a
                  href={card.button_link}
                  className="mt-auto inline-block px-4 py-2 bg-black text-white rounded-sm text-sm font-medium hover:bg-red-600 hover:text-white transition"
                >
                  {card.button_text}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-20">
            <p className="text-lg font-medium">
              🚧 {activeTab} services coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
