'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Migrating to their data center reduced our latency by 40% and improved our SLA compliance.",
    author: "CTO, FinTech Startup",
    logo: "/assets/user.jpg",
    color: "bg-gradient-to-br from-blue-600 to-indigo-700"
  },
  {
    quote: "Their managed services team handles our infrastructure so we can focus on product development.",
    author: "VP Engineering, SaaS Company",
    logo: "/assets/user.jpg",
    color: "bg-gradient-to-br from-purple-600 to-pink-600"
  },
  {
    quote: "The disaster recovery solution saved us during a regional outage. Zero data loss.",
    author: "IT Director, Healthcare Provider",
    logo: "/assets/user.jpg",
    color: "bg-gradient-to-br from-green-600 to-teal-600"
  }
];

const caseStudies = [
  {
    title: "Global E-Commerce Platform Scaling",
    description: "How we helped a retailer handle 10x traffic during Black Friday",
    link: "#",
    stats: "99.99% uptime during peak"
  },
  {
    title: "Banking System Migration",
    description: "Seamless transition of core banking systems to our private cloud",
    link: "#",
    stats: "Zero downtime migration"
  },
  {
    title: "IoT Data Processing",
    description: "Building a scalable backend for millions of connected devices",
    link: "#",
    stats: "10M+ devices supported"
  }
];

const DataCenterTestimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from organizations that transformed their infrastructure with our solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative rounded-xl overflow-hidden shadow-lg group ${testimonial.color} text-white`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="relative p-8 h-full flex flex-col">
                <FaQuoteLeft className="text-3xl mb-6" />
                <p className="text-lg mb-8 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <Image width={200} height={200} src={testimonial.logo} alt={testimonial.author} className="w-12 h-12 object-cover rounded-full" />
                  </div>
                  <span className="font-medium">{testimonial.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-red-800 to-red-600 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Success Stories</h3>
            <p className="text-gray-300 max-w-2xl">Explore how we have helped companies solve complex infrastructure challenges</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full mb-3">
                      Case Study
                    </span>
                    <h4 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors">
                      {caseStudy.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                    <p className="text-sm text-gray-500 font-medium">{caseStudy.stats}</p>
                  </div>
                  <motion.a
                    href={caseStudy.link}
                    whileHover={{ x: 5 }}
                    className="mt-auto inline-flex items-center text-red-600 font-medium group-hover:text-red-800 transition-colors"
                  >
                    Read full case study
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-gray-500 mb-8">TRUSTED BY FORTUNE 500 COMPANIES AND INNOVATIVE STARTUPS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {[
              "/assets/vserve-business.png",
              "/assets/wavicle.png",
              "/assets/kanmalai.png",
              "/assets/snow-man.png",
              "/assets/hoglund.png"
            ].map((logo, index) => (
              <Image
                key={index} 
                src={logo} 
                width={100}
                height={100}
                alt="Trusted company" 
                className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCenterTestimonials;