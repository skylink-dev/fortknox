'use client';
import React from 'react';

export default function CloudComparisonTable({
  title = "FortKnox Cloud Network Comparison",
  description = "Compare features across different cloud providers and see how FortKnox stands out.",
  providers = ['AWS', 'Azure', 'Google Cloud', 'FortKnox Cloud'],
  content = [
    {
      label: 'Global Data Centers',
      values: ['30+', '60+', '35+', '150+ in India'],
    },
    {
      label: 'Zero Downtime Guarantee',
      values: ['Limited', 'Limited', 'Limited', 'Yes (SLA-backed)'],
    },
    {
      label: 'Built-in OTT Streaming',
      values: ['No', 'No', 'No', 'Included with plans'],
    },
    {
      label: 'Edge AI Processing',
      values: ['Extra cost', 'Limited', 'Add-on', 'Included'],
    },
    {
      label: 'Custom Security Layer',
      values: ['Add-on', 'Add-on', 'Add-on', 'Integrated'],
    },
    {
      label: 'Private Interconnect',
      values: ['Yes', 'Yes', 'Yes', 'Yes with priority routing'],
    },
    {
      label: 'Setup Time',
      values: ['3–5 Days', '2–4 Days', '2–5 Days', 'Within 24 hours'],
    },
  ]
}) {
  return (
    <div className="p-6 md:p-12 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center mb-6">{description}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-sm md:text-base text-gray-700">
              <th className="px-4 py-3 text-left font-semibold border-b border-gray-300">Features</th>
              {Array.isArray(providers) &&
                [...providers].reverse().map((provider, idx) => (
                  <th key={idx} className="px-4 py-3 text-left font-semibold border-b border-gray-300 whitespace-nowrap">
                    {provider}
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(content) &&
              content.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item.label}</td>
                  {item.values &&
                    [...item.values].reverse().map((val, i) => (
                      <td key={i} className="px-4 py-3 text-gray-700">{val}</td>
                  ))}
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
