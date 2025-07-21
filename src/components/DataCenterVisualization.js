// components/DataCenterVisualization.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DataCenterVisualization = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = [
    {
      title: "Physical Security",
      details: "Biometric access, 24/7 monitoring, bullet-resistant walls",
      color: "from-red-600 to-red-800",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Power Infrastructure",
      details: "2N redundant UPS, backup generators, 99.999% uptime",
      color: "from-yellow-500 to-yellow-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Cooling Systems",
      details: "Hot/cold aisle containment, precision cooling, N+1 redundancy",
      color: "from-blue-500 to-blue-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Network Connectivity",
      details: "Multiple tier-1 carriers, 100Gbps+ capacity, <1ms latency",
      color: "from-green-500 to-green-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Server Infrastructure",
      details: "Enterprise-grade hardware, customizable configurations",
      color: "from-purple-500 to-purple-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Tier IV</span> Data Center Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities with interactive visualization
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Data Center Visualization */}
          <div className="w-full max-w-2xl relative h-96 mb-12">
            {/* Background building outline */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-64 h-full border-2 border-gray-700 rounded-t-lg"></div>
            </div>
            
            {/* Interactive layers */}
            {layers.map((layer, index) => {
              const layerHeight = 100 / layers.length;
              const topPosition = index * layerHeight;
              const isActive = activeLayer === index;
              
              return (
                <motion.div
                  key={index}
                  className={`absolute left-0 right-0 mx-auto w-64 rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive ? 'z-10 shadow-xl' : 'z-0'
                  }`}
                  style={{
                    height: `${layerHeight}%`,
                    top: `${topPosition}%`,
                    background: isActive 
                      ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                      : 'rgba(31, 41, 55, 0.7)',
                  }}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.8,
                    background: isActive 
                      ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                      : 'rgba(31, 41, 55, 0.7)',
                  }}
                  onClick={() => setActiveLayer(isActive ? null : index)}
                >
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${layer.color} ${isActive ? 'opacity-100' : 'opacity-20'} transition-opacity duration-300`}></div>
                  <div className="relative h-full flex items-center justify-center p-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${isActive ? 'bg-white' : 'bg-gray-700'} transition-all duration-300`}>
                      <div className={isActive ? `text-transparent bg-clip-text bg-gradient-to-br ${layer.color}` : 'text-gray-300'}>
                        {layer.icon}
                      </div>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="ml-4 text-left flex-1"
                      >
                        <h3 className="font-bold text-lg">{layer.title}</h3>
                        <p className="text-sm text-gray-200">{layer.details}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Legend / Details Panel */}
          <div className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Data Center Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {layers.map((layer, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg text-center transition-all duration-300 ${
                    activeLayer === index 
                      ? `bg-gradient-to-br ${layer.color} text-white shadow-md`
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveLayer(index)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${
                      activeLayer === index ? 'bg-white bg-opacity-20' : 'bg-gray-600'
                    }`}>
                      {layer.icon}
                    </div>
                    <span className="text-sm font-medium">{layer.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {activeLayer !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className={`mt-6 p-4 rounded-lg bg-gradient-to-br ${layers[activeLayer].color} bg-opacity-10`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${layers[activeLayer].color} text-white mr-4`}>
                    {layers[activeLayer].icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{layers[activeLayer].title}</h4>
                    <p className="text-gray-200">{layers[activeLayer].details}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterVisualization;