// components/TechnicalSpecs.js
import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { 
    category: 'Power', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      '2N redundant UPS systems',
      'N+1 diesel generators',
      '72-hour fuel supply',
      'Dual grid power feeds'
    ],
    color: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
  },
  { 
    category: 'Cooling', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      'N+2 precision cooling',
      'Hot/cold aisle containment',
      '25°C optimized environment',
      'Waterless fire suppression'
    ],
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  { 
    category: 'Security', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    items: [
      'Biometric access controls',
      '24/7 armed security',
      'Mantrap entry systems',
      'Full CCTV coverage'
    ],
    color: 'bg-gradient-to-br from-red-500 to-red-600'
  },
  { 
    category: 'Network', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    items: [
      'Multiple tier-1 carriers',
      '100Gbps+ backbone',
      'Diverse fiber paths',
      '<1ms latency to major IXPs'
    ],
    color: 'bg-gradient-to-br from-green-500 to-green-600'
  }
];

const certifications = [
  { name: 'Tier IV', icon: '🏆' },
  { name: 'ISO 27001', icon: '🔒' },
  { name: 'SOC 2 Type II', icon: '📊' },
  { name: 'HIPAA', icon: '🏥' },
  { name: 'PCI DSS', icon: '💳' },
  { name: 'GDPR', icon: '🌐' }
];

const TechnicalSpecs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Specifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade infrastructure built for maximum reliability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${spec.color} h-2 w-full`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 ${spec.color.replace('bg-gradient-to-br', 'bg')} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Compliance & Certifications</h3>
            <p className="text-gray-300">Our facilities meet the highest industry standards</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-3">
                  {cert.icon}
                </div>
                <span className="font-medium text-gray-900">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;