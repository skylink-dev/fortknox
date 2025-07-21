// components/UseCaseShowcase.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UseCaseShowcase = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');
  
  const useCases = {
    ecommerce: {
      title: "E-Commerce Platforms",
      description: "High-availability infrastructure for online retailers handling peak traffic loads during sales events.",
      features: [
        "99.999% uptime SLA",
        "Auto-scaling during traffic spikes",
        "DDoS protection",
        "Global CDN integration"
      ],
      image: "/ecommerce-dc.jpg",
      color: "bg-purple-600"
    },
    healthcare: {
      title: "Healthcare Systems",
      description: "HIPAA-compliant data centers for sensitive patient records and medical imaging storage.",
      features: [
        "HIPAA/GDPR compliance",
        "Encrypted data at rest",
        "High-performance storage",
        "Audit trails"
      ],
      image: "/healthcare-dc.jpg",
      color: "bg-blue-600"
    },
    finance: {
      title: "Financial Services",
      description: "Low-latency infrastructure for trading platforms and banking applications.",
      features: [
        "Ultra-low latency networking",
        "Private cross-connects",
        "Real-time monitoring",
        "Multi-factor security"
      ],
      image: "/finance-dc.jpg",
      color: "bg-emerald-600"
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Data Center Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Industry</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(useCases).map((key) => (
            <button
              key={key}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === key 
                  ? `${useCases[key].color} text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {useCases[key].title}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{useCases[activeTab].title}</h3>
              <p className="text-lg text-gray-600">{useCases[activeTab].description}</p>
              
              <ul className="space-y-3">
                {useCases[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`h-6 w-6 flex-shrink-0 ${useCases[activeTab].color.replace('bg', 'text')} mr-3`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <button className={`px-8 py-3 rounded-lg font-medium text-white ${useCases[activeTab].color} hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}>
                  Learn More
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className={`absolute inset-0 ${useCases[activeTab].color} opacity-10`}></div>
              <img 
                src={useCases[activeTab].image} 
                alt={useCases[activeTab].title}
                className="w-full h-auto object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
              />
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${useCases[activeTab].color}`}></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCaseShowcase;