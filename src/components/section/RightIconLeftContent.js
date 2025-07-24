import Link from 'next/link';
import React, { Fragment } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const iconCardData = [
  {
    id: 1,
    title: "Advanced Team Collaboration Tools",
    description:
      "Empower your teams with intuitive collaboration tools that streamline workflows, enhance productivity, and ensure everyone stays on the same page — no matter where they work from.",
    link: "#",
  },
  {
    id: 2,
    title: "Secure Access with Role Control",
    description:
      "Implement industry-grade security with role-based access controls, audit logs, and encryption to keep your cloud data protected and accessible only to authorized personnel.",
    link: "#",
  },
  {
    id: 3,
    title: "Real-Time Smart Performance Insights",
    description:
      "Monitor system health, resource usage, and team KPIs in real time. Identify trends, optimize performance, and make informed decisions with intelligent cloud analytics.",
    link: "#",
  },
  {
    id: 4,
    title: "Seamless Integration Across All Tools",
    description:
      "Easily connect your existing tools — like Slack, Microsoft 365, or CRM platforms — to unify operations and enable a fully integrated cloud ecosystem without coding hassles.",
    link: "#",
  },
];
export default function RightIconLeftContent() {
  return (
    <section id="icon-text-section" style={{ backgroundColor: "#FCF5EB" }}>
        <div className="h-[110px]"></div>
        <div className="mx-auto max-w-[1080px] px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="w-full lg:w-1/2">
              <h1 className="text-6xl font-medium leading-snug mb-4">Manage your groups</h1>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-8">
                {iconCardData.map((card) => (
                  <Fragment key={card.id}>
                    <div
                      key={card.id}
                      className="flex"
                    >
                      <div className="w-12 h-12 mr-4 text-white rounded-full flex items-start justify-center text-xl font-bold">
                        <div className="bg-white text-black text-xl w-8 h-8 flex items-center justify-center rounded-full border border-black">
                          {card.id}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-4">{card.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{card.description}</p>
                        <div>
                          <Link href={card.link} className='text-black-500 border-b-2 border-red-500 text-[16px] inline-block'>
                            Learn more
                          </Link>
                          <KeyboardArrowRightIcon className="text-black"></KeyboardArrowRightIcon></div>
                      </div>
                    </div>
                    <hr className="border-t-1 border-gray-300 my-4 w-full" />
                  </Fragment >
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[110px]"></div>
      </section>
  )
}
