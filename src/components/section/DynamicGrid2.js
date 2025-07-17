import Image from 'next/image';
import React from 'react';

export default function DynamicGrid2({data}) {
  const leftContent = data.cards?.find(item => item.subcards?.length === 0);
  const gridContent = data.cards?.find(item => item.subcards?.length > 0);
  return (
    <section className="bg-white py-12 px-4">
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
         {data.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
        {data.description}
        </p>
      </div>

      {/* ✅ 2-Column Intro Section - 35% / 65% Split */}
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 items-stretch mb-16">
  {/* Left (35%) */}
  <div className="basis-full md:basis-[40%] rounded-xl bg-red-100 px-20 py-16 flex items-center">
    <div className="w-full text-left flex flex-col h-full justify-evenly">
      <h3 className="text-[36px] leading-[46px] font-medium mb-4">
              {leftContent.title}                 
      </h3>
      <p className="text-gray-700">
        {leftContent.description}
      </p>
    </div>
  </div>

  {/* Right (65%) */}
  <div className="basis-full md:basis-[60%] h-full">
    <div className="h-full w-full">
      <Image
        src={`${data.image}`}
        alt="Smart Home"
        width={3700}
        height={3083}
        className="h-full w-full object-cover rounded-xl shadow-md"
      />
    </div>
  </div>
</div>
 <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
  {gridContent.subcards.map((item, index) => (
    <a
      key={index}
      href={item.button_link}
      className=""
    >
      <div className="bg-gray-100 text-center rounded-lg shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center relative overflow-hidden max-h-[260px]">
          <Image src={item.image} alt={item.title} className="mx-auto object-cover min-h-[280px]" width={500} height={400} layout="intrinsic"/>
      </div>
      <h4 className="font-semibold mb-1 text-center mt-2 text-[16px] pb-2">{item.title}</h4>
    </a>
  ))}
</div>
    </section>
  );
}
