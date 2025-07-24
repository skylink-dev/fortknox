'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BoltIcon from '@mui/icons-material/Bolt';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SpeedIcon from '@mui/icons-material/Speed';
import InsightsIcon from '@mui/icons-material/Insights';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Image from 'next/image';

const getIcon = (code) => {
  const iconProps = "w-12 h-12";
  switch (code) {
    case "cyberprotection":
      return <Image src="/assets/cybersecurity.png" width={40} height={40} alt="cybersecurity"></Image>;
    case "complianceready":
      return <Image src="/assets/compliance.png" width={40} height={40} alt="cybersecurity"></Image>;
    case "cloudsync":
      return <Image src="/assets/download.png" width={40} height={40} alt="cybersecurity"></Image>;
    case "elasticstorage":
      return <Image src="/assets/internet.png" width={40} height={40} alt="cybersecurity"></Image>;
    default:
      return null;
  }
};

export default function FourIcon({ data }) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (data?.cards?.length) {
      setFeatures(data.cards);
    }
  }, [data]);

  if (!data) return null;

  return (
    <section className="bg-white">
      <div className="h-[110px]" />
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title & Link */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-10">
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-semibold mb-4 leading-snug">
              <span className="text-red-600">Smart</span> Infrastructure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our systems are built for speed, reliability, and intelligence — from optimized latency to real-time analytics, we ensure your infrastructure can grow with your needs while staying lightning-fast and secure.
            </p>
          </div>
          <div className="lg:w-1/3 flex items-start lg:justify-end">
            <Link
              href="#"
              className="inline-flex items-center text-red-600 text-[16px] border-b border-red-600 hover:opacity-80"
            >
              Explore features
              <CallMadeIcon className="ml-1" style={{ fontSize: "18px" }} />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 text-left flex flex-col items-start justify-center min-h-[190px] gap-3"
            >
              <div className="p-3 rounded-full bg-red-50">
                {getIcon(feature.code)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[110px]" />
    </section>
  );
}
