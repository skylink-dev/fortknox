import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function PortfolioGrid({data}) {
  console.log(data.cards)
  return (
    <section className="pt-10 bg-gray-50">
      <div className="w-full text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {data.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
       {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {data.cards.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group transition-all aspect-square bg-center bg-cover"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={`absolute left-1/2 -translate-x-1/2 text-center p-4 ${item.code || 'bottom-4'}`}>
                      <h3 className={`text-[40px] whitespace-nowrap font-semibold ${item.textColor || 'text-white'}`}>{item.title}</h3>
              <p className={`text-[20px] mt-1 ${item.textColor || 'text-white'}`}>{item.description}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-sm text-white  bg-transparent px-4 py-2 rounded-md hover:bg-red-600 transition mt-4"
              >
                View Project <NavigateNextIcon></NavigateNextIcon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
