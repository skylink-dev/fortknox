import React from 'react';

export default function NewsLetter({data}) {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{ backgroundImage: "url('/assets/footer-banner.jpg')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column */}
        <div className="text-center md:text-left md:max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-white text-base md:text-lg">
            {data.description}
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-shrink-0">
          <a
            href={data.button_link}
            className="inline-block bg-white text-black font-medium text-sm md:text-base px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
          >
            {data.bottom_text}
          </a>
        </div>
      </div>
    </section>
  );
}
