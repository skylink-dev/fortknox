
'use client'
import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Link from 'next/link';

export default function PricingPlan({ data }) {
  const [plans, setPlan] = useState([]);
  useEffect(() => {
    if (data != null && data != undefined) {
      data.cards.forEach(value => {
        setPlan((prevPlan) => {
          return [
            ...prevPlan, {
              name: value.title,
              processor: value?.subcards[0]?.description,
              memory: value?.subcards[1]?.description,
              storage: value?.subcards[2]?.description,
              bandwidth: value?.subcards[3]?.description,
              price: value?.subcards[4]?.description,
              period: value?.subcards[5]?.description,
              featured: value?.subcards[6]?.description == "true" ? true : false
            },
          ]
        })
      });
    }
    console.log(data);
  }, [])

  return (
    <section style={{ background: "rgb(251 242 242)" }}>
      <div className="h-[80px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-blak">Pricing Plan</h2>
            <p className="text-black max-w-2xl mx-auto text-center mt-3 mb-6">Use Linear for free with your whole team. Upgrade to enable unlimited issues, enhanced security controls, and additional features.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border  border-[#FFB5B5] rounded-lg overflow-hidden bg-white">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`overflow-hidden transition-all duration-300 border-r border-[#FFB5B5]`}>
                <div className="p-6">
                  <div className="border-b border-[#FFB5B5] mb-5">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm ml-1 text-lg text-gray-500">per {plan.period}</span>
                  </div>
                  </div>
                  <div className="border-b border-[#FFB5B5] mb-4 pb-4">
                    Free for everyone
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center py-1">
                      <span className="w-5 h-5 mr-2 bg-red-600 rounded-full flex items-center justify-center"><DoneIcon style={{ fontSize: "14px", color: "white" }}></DoneIcon></span>
                      <span className="text-gray-700">Unlimited members</span>
                    </div>
                    <div className="flex items-center py-1">
                      <span className="w-5 h-5 mr-2 bg-red-600 rounded-full flex items-center justify-center"><DoneIcon style={{ fontSize: "14px", color: "white" }}></DoneIcon></span>
                      <span className="text-gray-700">2 teams</span>
                    </div>
                    <div className="flex items-center py-1">
                      <span className="w-5 h-5 mr-2 bg-red-600 rounded-full flex items-center justify-center"><DoneIcon style={{ fontSize: "14px", color: "white" }}></DoneIcon></span>
                      <span className="text-gray-700">250 issues</span>
                    </div>
                    <div className="flex items-center py-1">
                      <span className="w-5 h-5 mr-2 bg-red-600 rounded-full flex items-center justify-center"><DoneIcon style={{ fontSize: "14px", color: "white" }}></DoneIcon></span>
                      <span className="text-gray-700">Slack and GitHub</span>
                    </div>
                    <div className="flex items-center py-1">
                      <span className="w-5 h-5 mr-2 bg-red-600 rounded-full flex items-center justify-center"><DoneIcon style={{ fontSize: "14px", color: "white" }}></DoneIcon></span>
                      <span className="text-gray-700">API access</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center mx-5">
                  <button
                    className={`w-full px-3 py-2 rounded-md my-0 mt-6 mb-5 block text-center ${plan.featured
                      ? 'bg-red-600 hover:bg-red-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    Get Started
                  </button>
                  <div className='text-gray-500'>or <Link href="#" className="border-b border-color-white text-black">contact sales</Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-gray-900 text-sm">
            <p>All plans include 24/7 support, DDoS protection, and 99.9% uptime SLA</p>
            <p className="mt-2">Need custom configuration? <a href="#" className="text-red-600 underline font-semibold">Contact us</a></p>
          </div>
        </div>
      </div>
      <div className="h-[80px]"></div>
    </section>
  );
};
