'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const cardDataDetails = [
  {
    icon: "/assets/global-cloud-coverage.png",
    title: "Global Cloud Coverage",
    description: "Deploy workloads across regions and edge zones to reduce latency and enhance performance.",
    legal: "Availability may vary by location. Terms apply.",
  },
  {
    icon: "/assets/high-performance-compute.png",
    title: "High-Performance Compute",
    description: "Run scalable virtual machines, containers, and serverless apps with zero downtime.",
    legal: "Performance based on selected instance type.",
  },
  {
    icon: "/assets/secure-cloud-storage-icon.png",
    title: "Secure Cloud Storage",
    description: "Store and retrieve any amount of data with our encrypted, redundant storage systems.",
    legal: "Storage usage is billed monthly. Subject to limits.",
  },
  {
    icon: "/assets/cloud-media-streaming.png",
    title: "Cloud Media Streaming",
    description: "Deliver live or on-demand video via our robust media streaming platform without buffering.",
    legal: "Streaming experience may vary by bandwidth.",
  },
];

export default function IconCard2() {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
          {/* Title Section - Left Side */}
          <div className="w-full lg:w-4/12 mt-10 lg:mt-0 lg:pr-12 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Connecting Your Digital World
            </h2>
            <p className="text-base text-gray-600">
              Explore what makes FortKnox Cloud Infrastructure stand out.
            </p>
            <div className="mt-6">
              <Link
                href="#"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-sm text-white font-semibold transition"
              >
                Check Availability
              </Link>
            </div>
          </div>

          {/* Card Section - Right Side */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {cardDataDetails.map((card, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl transition">
                <div className="flex-shrink-0 bg-red-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Image src={card.icon} width={32} height={32} alt={card.title} />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
