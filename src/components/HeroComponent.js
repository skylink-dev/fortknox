// components/DataCenterHero.js
import React from 'react';

const DataCenterHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-pulse delay-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Data Center</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Scalable, secure, and high-performance infrastructure for your critical workloads
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 overflow-hidden">
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 mb-4 flex items-center justify-center text-3xl bg-gray-800 rounded-lg group-hover:bg-indigo-600 transition-colors duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
          {service.description}
        </p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    icon: '🖥️',
    title: 'Colocation',
    description: 'Secure rack space with premium connectivity'
  },
  {
    icon: '☁️',
    title: 'Cloud Services',
    description: 'Hybrid and private cloud solutions'
  },
  {
    icon: '🛡️',
    title: 'Managed Security',
    description: 'End-to-end protection for your data'
  },
  {
    icon: '🔌',
    title: 'Disaster Recovery',
    description: 'Business continuity planning'
  }
];

export default DataCenterHero;