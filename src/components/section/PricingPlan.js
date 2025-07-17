
'use client'
import React, { useEffect, useState } from 'react';

const PricingCarousel = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Rotate cards automatically
  useEffect(() => {
    if (!isAutoRotating || !services?.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoRotating, services]);

  if (!services || services.length === 0) {
    return (
      <div className="text-center p-8 text-gray-600 bg-gray-100 rounded-lg">
        No pricing information available
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Data Center Pricing</h2>
        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          {isAutoRotating ? 'Pause' : 'Play'} Rotation
        </button>
      </div>

      <div className="relative h-96 overflow-hidden">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === activeIndex
                ? 'opacity-100 translate-x-0 z-10'
                : 'opacity-0 translate-x-full'
            }`}
            onClick={() => {
              setActiveIndex(index);
              setIsAutoRotating(false);
            }}
          >
            <div className="h-full bg-white rounded-xl shadow-lg p-8 flex flex-col cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.name}
              </h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${service.price}
                </span>
                <span className="text-lg text-gray-500 ml-1">
                  /{service.duration}
                </span>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                {service.specs &&
                  Object.entries(service.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-dashed border-gray-200"
                    >
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => {
              setActiveIndex(index);
              setIsAutoRotating(false);
            }}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


export default function PricingPlan() {
  const plans = [
    {
      name: 'Basic',
      processor: '2 vCPU Cores',
      memory: '4GB DDR4',
      storage: '100GB SSD',
      bandwidth: '2TB',
      price: '$29',
      period: '/month',
      featured: false
    },
    {
      name: 'Standard',
      processor: '4 vCPU Cores',
      memory: '8GB DDR4',
      storage: '250GB SSD',
      bandwidth: '5TB',
      price: '$59',
      period: '/month',
      featured: true
    },
    {
      name: 'Premium',
      processor: '8 vCPU Cores',
      memory: '16GB DDR4',
      storage: '500GB NVMe',
      bandwidth: '10TB',
      price: '$99',
      period: '/month',
      featured: false
    },
    {
      name: 'Enterprise',
      processor: '16 vCPU Cores',
      memory: '32GB DDR4',
      storage: '1TB NVMe',
      bandwidth: 'Unmetered',
      price: '$199',
      period: '/month',
      featured: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Data Center Pricing Plans</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
              plan.featured ? 'ring-2 ring-blue-500 transform md:-translate-y-2' : 'border border-gray-200'
            }`}
          >
            {plan.featured && (
              <div className="bg-blue-500 text-white text-center py-1 px-4 text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="ml-1 text-lg text-gray-500">{plan.period}</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Processor: {plan.processor}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Memory: {plan.memory}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Storage: {plan.storage}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Bandwidth: {plan.bandwidth}</span>
                </div>
              </div>
              
              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.featured 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>All plans include 24/7 support, DDoS protection, and 99.9% uptime SLA</p>
        <p className="mt-2">Need custom configuration? <a href="#" className="text-blue-600 hover:underline">Contact us</a></p>
      </div>
    </div>
  );
};
