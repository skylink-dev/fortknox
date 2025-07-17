import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const portfolioData = [
  {
    id: 1,
    image: '/assets/24_7_physical-security.jpg',
    title: '24/7 Physical Security',
    desc: 'Biometric access, CCTV surveillance, and mantrap entry systems safeguard your servers around the clock.',
    link: '#',
       textColor: 'text-white',
    bottom: 'top-4',
  },
  {
    id: 2,
    image: '/assets/security-and-compliance-1.jpg',
    title: 'Tier 3 Certified',
    desc: 'Our infrastructure is Tier 3 Certified for reliability, performance, and security.',
    link: '#',
        textColor: 'text-white',
    bottom: 'bottom-10',
  },
  {
    id: 3,
    image: '/assets/hpaa-ready-1.jpg',
    title: 'GDPR & HIPAA Ready',
    desc: 'We support compliance with global data protection regulations for healthcare, finance, and more.',
    link: '#',
        textColor: 'text-white',
    bottom: 'bottom-5',
  },
  {
    id: 4,
    image: '/assets/ddos-protection-1.jpg',
    title: 'DDoS Protection',
    desc: 'Real-time mitigation tools defend your infrastructure from volumetric and application-layer attacks.',
    link: '#',
        textColor: 'text-white',
    bottom: 'top-10',
  },
  {
    id: 5,
    image: '/assets/firewall-and-access-control.jpg',
    title: 'Firewall & Access Control',
    desc: 'Advanced hardware firewalls and IP whitelisting ensure only authorized traffic reaches your environment.',
    link: '#',
        textColor: 'text-white',
    bottom: 'bottom-4',
  },
  {
    id: 6,
    image: '/assets/audit-trails-logs.jpg',
    title: 'Audit Trails & Logs',
    desc: 'Comprehensive activity logs and security reports available for compliance, auditing, and investigations.',
    link: '#',
    textColor: 'text-white',
    bottom: 'top-4',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="pt-10 bg-gray-50">
      <div className="w-full text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Security & Compliance
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
       Protecting Your Data with Enterprise-Grade Security and Global Standards
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group transition-all aspect-square bg-center bg-cover"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className={`absolute left-1/2 -translate-x-1/2 text-center p-4 ${item.bottom || 'bottom-4'}`}>
                      <h3 className={`text-[40px] whitespace-nowrap font-semibold ${item.textColor || 'text-black'}`}>{item.title}</h3>
              <p className={`text-[20px] mt-1 ${item.textColor || 'text-black'}`}>{item.desc}</p>
              <a
                href={item.link}
                className="inline-flex items-center text-sm text-white  bg-transparent px-4 py-2 rounded-md hover:bg-red-600 transition mt-4"
              >
                View Project <NavigateNextIcon></NavigateNextIcon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
