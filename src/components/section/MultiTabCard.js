'use client'
import { cardData } from '@/data/home';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function MultiTabCard({ cardsData }) {
  const tabs = cardsData.cards.map(card => card.title);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  useEffect(() => {
    if (tabs.length && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
    }
  }, [tabs]);

  const activeCard = cardsData.cards.find(card => card.title === activeTab);
  const subcards = activeCard?.subcards || [];
  return (
    <section className='multi-tab-section'>
    <div className="w-full px-4" style={{ background: "rgb(251 242 242)" }}>
      <div className="h-[80px]"></div>
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            {cardsData.title}
          </h2>
          <p className="text-black mb-4 text-[18px] leading-[25px]">
            {cardsData.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-15 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2.5 text-sm font-medium transition border-b-2 ${activeTab === tab
                  ? 'bg-transparent text-red-600 border-red-500 border-b-2'
                  : 'text-blck border-transparent hover:border-red-500 hover:border-b-2 hover:text-red-600'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards or Coming Soon */}
        {subcards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {subcards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl border-1 border-[#FFB5B5] transition overflow-hidden flex flex-col items-center text-center px-6 py-6 multi-tab-card"
              >
                <div className="w-35 h-25 mb-2">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={1200}
                    height={1200}
                    className="w-full object-contain h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-5 mb-4 text-[18px] leading-[25px]">{card.description}</p>
                <div className='flex items-center justify-center'>
                <a
                  href={card.button_link}
                  className="text-black-500 border-b border-black text-[16px] inline-block"
                >
                  {card.button_text}
                </a>
                <CallMadeIcon style={{fontSize:"15px", marginLeft:"5px"}}></CallMadeIcon>
                                </div>
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
      <div className="h-[80px]"></div>
    </div>
    </section>
  );
}
