"use client"
import React, { useRef, useState, useEffect } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function PortfolioGrid({ data }) {
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showPointer,setShowPointer]=useState(false);

  const updateArrowsVisibility = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const updateActiveIndex = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const cardWidth = container.scrollWidth / data.cards.length;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, data.cards.length - 1));
      updateArrowsVisibility();
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;

    const updateCardWidth=()=>{
      setShowPointer(container.clientWidth<608?true:false)
    }
    if (container) {
      container.addEventListener('scroll', updateActiveIndex);
      updateCardWidth();
      window.addEventListener('resize', updateCardWidth);
      updateArrowsVisibility();
      return () => {
        window.removeEventListener('resize', updateCardWidth)
        container.removeEventListener('scroll', updateActiveIndex);
      }
    }
  }, [data.cards.length]);

  const scrollToIndex = (index) => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const cardWidth = container.scrollWidth / data.cards.length;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const cardWidth = container.scrollWidth / data.cards.length;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {data.description}
          </p>
        </div>

        {/* Unified scrolling container */}
        <div className="relative group">
          {/* Navigation buttons */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <NavigateNextIcon className="rotate-180 text-gray-700" />
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <NavigateNextIcon className="text-gray-700" />
            </button>
          )}

          {/* Scrolling content with integrated titles */}
          <div 
            ref={scrollContainer}
            className="flex  overflow-x-hidden pb-8 scrollbar-hide space-x-6 px-2 snap-x snap-mandatory"
          >
            {data.cards.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 snap-center"
              >
                <div className="h-full flex flex-col">
                  {/* Integrated title */}
                  <div className="p-6 pb-0">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 pt-4">
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                    >
                      View Detail
                      <NavigateNextIcon className="ml-1 transition-transform group-hover:translate-x-1" fontSize="small" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}

        {
          showPointer?(<div className="flex justify-center space-x-2 mt-8">
          {data.cards.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>):null
        }
        
      </div>
    </section>
  );
}