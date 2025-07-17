'use client'
import React, { useEffect, useState } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import StorageIcon from '@mui/icons-material/Storage';

const getIcon=(text)=>{
  switch (text) {
    case "cyberprotection":
      return  <SecurityIcon className="!w-12 !h-12 text-blue-600" />;
    case "complianceready":
      return  <AssuredWorkloadIcon className="!w-12 !h-12 text-green-600" />;
    case "cloudsync":
      return  <CloudDoneIcon className="!w-12 !h-12 text-purple-600" />;
    case "elasticstorage":
      return  <StorageIcon className="!w-12 !h-12 text-orange-600" />;
    
  
    default:
      break;
  }
}

export default function FourIcon({data}) {

  const [features,setFeatures]=useState([]);
  useEffect(()=>{
    setFeatures(data.cards)
  },[data])
  if(data==null||data==undefined) return null;
  return (
    <div className="min-w-full bg-gray-100 p-4 px-6 md:px-60 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[180px] flex flex-col items-center justify-center gap-3 text-center border border-gray-100"
          >
            <div className="icon-container p-3 rounded-full bg-blue-50">
              {getIcon(feature.code)}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 px-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}