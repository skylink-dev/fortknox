
'use client'
import React, { useEffect, useState } from 'react';

export default function PricingPlan({data}) {
  const [plans,setPlan]=useState([]);
  useEffect(()=>{
    if(data!=null&&data!=undefined){
      data.cards.forEach(value => {
        setPlan((prevPlan)=>{
          return [
        ...prevPlan, {
          name: value.title,
          processor: value?.subcards[0]?.description,
          memory: value?.subcards[1]?.description,
          storage: value?.subcards[2]?.description,
          bandwidth: value?.subcards[3]?.description,
          price: value?.subcards[4]?.description,
          period: value?.subcards[5]?.description,
          featured: value?.subcards[6]?.description=="true"?true:false
        },
      ]})
      });
      


    }
    
    console.log(data);
  },[])

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
