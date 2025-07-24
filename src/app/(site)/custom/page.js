'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DoneIcon from '@mui/icons-material/Done';
import EastIcon from '@mui/icons-material/East';

const faqs = [
  {
    question: 'What is a Data Center?',
    answer:
      'A data center is a facility used to house computer systems and associated components, such as telecommunications and storage systems. It provides power, cooling, security, and networking infrastructure to support critical applications and data.',
  },
  {
    question: 'What is Cloud Hosting?',
    answer:
      'Cloud hosting uses virtual servers hosted on a network of physical servers. It offers scalable resources, high availability, and flexible pricing for businesses of all sizes.',
  },
  {
    question: 'Is cloud storage secure?',
    answer:
      'Yes, most cloud providers offer robust security protocols including encryption, multi-factor authentication, and 24/7 monitoring. Always choose providers that comply with industry standards like ISO or SOC.',
  },
  {
    question: 'What are the benefits of using a cloud data center?',
    answer:
      'Benefits include cost savings, scalability, improved performance, disaster recovery, and access to advanced technologies without large capital investment.',
  },
];
const slides = [
  {
    title: 'High-Speed Cloud Performance',
    description: 'Experience lightning-fast cloud infrastructure with low latency.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Military-Grade Encryption',
    description: 'Protect your data with industry-leading security protocols.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Global CDN Network',
    description: 'Deliver content faster to users around the world.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Easily scale up or down based on your workload.',
    image: '/assets/sample-3.png',
  },
  {
    title: '24/7 Support Team',
    description: 'Get help anytime from our certified cloud experts.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Uptime Guarantee',
    description: 'We ensure your systems are always online — 99.99% SLA.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Simple Dashboard',
    description: 'Manage all your services from a user-friendly control panel.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Cost-Effective Plans',
    description: 'Flexible pricing that fits startups and enterprises alike.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'AI-Powered Monitoring',
    description: 'Proactive issue detection and performance tracking.',
    image: '/assets/sample-3.png',
  },
  {
    title: 'Multi-Cloud Ready',
    description: 'Deploy across AWS, Azure, and GCP from one platform.',
    image: '/assets/sample-3.png',
  },
];
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

const fortknoxStepsData = [
  {
    id: 1,
    title: "Step 1",
    subtitle: "Connect to FortKnox",
    description: "Establish a secure connection to the FortKnox Data Center with encrypted access and flexible setup options."
  },
  {
    id: 2,
    title: "Step 2",
    subtitle: "Deploy Your Infrastructure",
    description: "Easily deploy servers, cloud storage, or hybrid systems using our scalable platform built for performance."
  },
  {
    id: 3,
    title: "Step 3",
    subtitle: "Manage with Confidence",
    description: "Monitor, scale, and secure your infrastructure through our advanced control panel and 24/7 support."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="bg-white p-8 rounded-lg">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left text-lg font-medium" style={{ color: "#0e0e0e" }}
    >
      {faq.question}
      <span className="bg-red-500 text-white text-xl w-8 h-8 flex items-center justify-center rounded-full border border-black">{isOpen ? '-' : <CallMadeIcon></CallMadeIcon>}</span>
    </button>
    {isOpen && (
      <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
        {faq.answer}
      </p>
    )}
  </div>
);
export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section style={{ backgroundColor: "#111B21" }}>
        <div className="mx-auto max-w-[1080px] px-4">
          <div className="h-[110px]"></div>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <Image
                src="/assets/sample-image-2.png"
                alt="Sample"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h1 className="text-4xl leading-nomal font-medium mb-4">
                <span className="text-red-500">Secure<br /></span> Design
              </h1>
              <p className="mb-4 text-[18px] leading-[25px]">
                With end-to-end encryption across our cloud infrastructure, your data is protected at every stage — in transit and at rest. Only you and your authorized systems can access the information. No third parties. Not even our administrators.
              </p>
              <Link href="#" className="text-red-500 border-b border-red-500 text-[16px] inline-block">
                Learn more
              </Link>
              <CallMadeIcon className="text-red-500 ms-1" style={{ fontSize: "18px" }}></CallMadeIcon>
            </div>
          </div>
          <div className="h-[110px]"></div>
        </div>
      </section>
      <section id="faq">
        <div className="section-header" style={{ backgroundColor: "#FCF5EB" }}>
          <div className="h-[110px]"></div>
          <div className="mx-auto max-w-[1080px] px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16 justify-between">
              <h2 className="text-4xl leading-nomal font-medium mb-4">Need more help?</h2>
              <div className="button-wrap">
                <Link href="#" className='text-red-500 border-b border-red-500 text-[16px] inline-block'>
                  See all FAQs</Link>
                <CallMadeIcon className="text-red-500 ms-1" style={{ fontSize: "18px" }}></CallMadeIcon>
              </div>
            </div>
            <div className="faqsection mt-10 space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
          <div className="h-[110px]"></div>
        </div>
      </section>
      <section id="slider" style={{ overflow: "hidden" }}>
        <div className="h-[110px]"></div>
        <div className="mx-auto max-w-[1080px] px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-16 justify-between">
            <div className="w-full lg:w-1/2 text-black flex flex-col justify-between h-auto">
              <div className="section-header">
                <h1 className="text-4xl font-semibold mb-4">Keep the conversation going</h1>
                <p className="text-[18px] leading-[26px] mb-6">
                  Stay connected anytime, anywhere on your preferred device.
                </p>
              </div>
              {/* Custom Arrows */}
              <div className="flex gap-4 pb-5">
                <button
                  onClick={scrollPrev}
                  className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
                >
                  <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
                </button>
                <button
                  onClick={scrollNext}
                  className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
                >
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <div className="w-full lg:w-1/2 -mx-4">
                <div
                  ref={scrollRef}
                  className="flex scroll-smooth gap-6 pb-4"

                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="min-w-[300px] max-w-[500px] snap-start shrink-0 bg-[#f5f5f5] rounded-xl overflow-hidden shadow-md"
                    >
                      <div className="rounded-3xl">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={400}
                          height={400}
                          className="w-full h-88 object-cover"
                        />
                      </div>
                      <div className="p-6 bg-white flex whitespace-wrap overflow-x-auto h-full gap-10">
                        <h3 className="text-lg font-semibold text-black mb-0">{slide.title}</h3>
                        <p className="text-gray-600 text-sm mt-0">{slide.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[110px]"></div>
      </section>
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
      <section style={{ backgroundColor: "#111B21" }}>
        <div className="mx-auto max-w-[1080px] px-4">
          <div className="h-[110px]"></div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white mb-4">
              Where innovation has no limitations.
            </h1>
            <p className="text-[18px] leading-[26px] text-white mb-8">
              From scaling startups to global enterprises, see how companies are
              building customer experiences that matter with FortKnox Data Center.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-lg shadow-lg overflow-hidden mt-8 min-h-[400px]">
            <div className="w-full lg:w-1/4 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="text-4xl font-bold text-red-600">99.9%</h3>
                  <p className="text-7xl text-gray-600 mt-2">Uptime Guarantee</p>
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-bold text-red-600">24/7</h3>
                  <p className="text-7xl text-gray-600 mt-2">Monitoring & Support</p>
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-bold text-red-600">100+</h3>
                  <p className="text-7xl text-gray-600 mt-2">Global Clients</p>
                </div>
              </div>
              <div className="mt-8 text-left">
                <button className="text-xs bg-white hover:bg-red-700 border text-black px-3 py-2 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-3/4 relative card-gradient-customize">
              <img
                src="/assets/sample-4.webp"
                alt="Data Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-40 px-8 py-8">
                <h2 className="text-white text-2xl font-semibold mb-3 drop-shadow-lg">
                  Forknox Cloud empowers businesses to scale effortlessly and deliver seamless digital experiences worldwide.
                </h2>
                <Link href="#" className="text-white border-b-2 border-red-500 text-[16px] inline-block">
                  Read Fortknox Story
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[110px]"></div>
        </div>
      </section>
      <section className="dynamic-grid" style={{ backgroundColor: "#FCF5EB" }}>
        <div className="mx-auto max-w-[1080px] px-4">
          <div className="h-[110px]"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black leading-normal mb-4">
              A leader in digital engagement <br />
              for government and higher education
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-10">
            <div className="w-full lg:w-1/2">
              <div className="resources-item-grid">
                <div className="resources-item">
                  <Image src="/assets/sample-5.jpg" width={800} height={400} alt="sample"></Image>
                  <span className="resources-item-icon">
                    <CallMadeIcon className='text-white'></CallMadeIcon>
                  </span>
                </div>
                <div className="resources-item">
                  <Image src="/assets/sample-5.jpg" width={800} height={400} alt="sample"></Image>
                  <span className="resources-item-icon">
                    <CallMadeIcon className='text-white'></CallMadeIcon>
                  </span>
                </div>
                <div className="resources-item">
                  <Image src="/assets/sample-5.jpg" width={800} height={400} alt="sample"></Image><span className="resources-item-icon">
                    <CallMadeIcon className='text-white'></CallMadeIcon>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h4 className="text-3xl font-semibold text-gray-800">
                Explore resources and turnkey solutions
              </h4>
              <p className="text-black leading-relaxed text-[18px] leading-[25px]">
                Public service agencies trust Forknox to power the digital shift and provide resources for any mission-critical applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-4 text-gray-700 my-7">
                  <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full"><DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                  Secure, simple-to-use platform
                </li>
                <li className="flex items-center gap-4 text-gray-700 my-7">
                  <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full">  <DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                  Convenient apps that deploy quickly
                </li>
                <li className="flex items-center gap-4 text-gray-700 my-7">
                  <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full"><DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                  Customizable to your unique needs
                </li>
                <li className="flex items-center gap-4 text-gray-700 my-7">
                  <div className="bg-red-600 text-black text-xl w-5 h-5 flex items-center justify-center rounded-full"><DoneIcon className="w-1 h-1 text-white" style={{ fontSize: '17px' }} /></div>
                  Flexible pricing
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[110px]"></div>
        </div>
      </section>
      <section
        style={{
          background: "linear-gradient(23deg,#d32525 17.81%,#d32525 83.03%)",
        }}
      >
        <div className="h-[110px]"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16 mt-10">
            <div className="w-full lg:w-1/2">
              <span className="bg-white mb-4 px-6 py-3 text-black inline-block rounded-full">
                Platform Overview
              </span>
              <div className="max-w-[38rem] text-left">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Low-code IoT platform for <br /> connected business
                </h1>
                <p className="text-[18px] leading-[26px] text-white mb-8">
                  A low-code IoT application enablement platform to develop endless
                  custom IoT solutions with unique requirements and mission-critical
                  operations.
                </p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                  <li>
                    <a
                      href="#"
                      className="bg-white px-6 py-3 text-black inline-block rounded-full"
                    >
                      Device Management <EastIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-white px-6 py-3 text-black inline-block rounded-full"
                    >
                      AI Analytics and Reports <EastIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-white px-6 py-3 text-black inline-block rounded-full"
                    >
                      Alerts and Notifications <EastIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-white px-6 py-3 text-black inline-block rounded-full"
                    >
                      Commands and Controls <EastIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-white px-6 py-3 text-black inline-block rounded-full"
                    >
                      Developer Portal <EastIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-white px-6 py-3 text-black inline-block rounded-full"
                    >
                      Explore Features <EastIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="platform-img">
                <Image src="/assets/sample-6.webp" width={1200} height={900} alt="sample5" className="relative top-[231px]"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[110px]"></div>
      </section>
      <section id="form" style={{ backgroundColor: "#FCF5EB" }}>
        <div className="h-[110px]"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-16 justify-between bg-white p-10 rounded-3xl overflow-hidden">
            <div className="w-full lg:w-1/2 text-black flex flex-col justify-start h-auto">
              <h1 className="text-4xl font-bold text-black mb-4">
                Ready to take your <br /> first step <span className="text-red-600">today ?</span>
              </h1>
                          <div className="support-img-container">
              <Image src="/assets/support.png" width={1200} height={900} alt="contact"></Image>
            </div>
            </div>
            <div className="w-full lg:w-1/2">
              <form
                action="#"
                method="POST"
                className=""
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  Got questions? <span className="text-red-600">We're all ears!</span>
                </h2>
                {/* Business Name */}
                <div>
                  <label htmlFor="CASECF1" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="CASECF1"
                    name="CASECF1"
                    maxLength="255"
                    placeholder="Business name"
                    className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                  />
                  <span className="text-red-500 text-sm hidden" id="name-err">Please enter name</span>
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                  />
                  <span className="text-red-500 text-sm hidden" id="email-err">Please enter a valid email address</span>
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="Phone" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Phone"
                    name="Phone"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                  />
                  <span className="text-red-500 text-sm hidden" id="phone-number-err">Please enter a valid mobile number</span>
                </div>
                {/* State */}
                <div>
                  <label htmlFor="CASECF3" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                    Select State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="CASECF3"
                    name="CASECF3"
                    className="w-full border border-gray-300 rounded-md bg-white p-4 my-2"
                  >
                    <option value="">Select a state</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    {/* Add more states as needed */}
                  </select>
                  <span className="text-red-500 text-sm hidden" id="state-err">Please select the state</span>
                </div>
                {/* Requirements */}
                <div>
                  <label htmlFor="Description" className="block text-sm font-medium text-gray-700 mb-1 hidden">
                    Elaborate your requirements
                  </label>
                  <textarea
                    id="Description"
                    name="Description"
                    placeholder="Requirements"
                    className="w-full border border-gray-300 rounded-md p-2 my-2 bg-white"
                    rows="4"
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  By submitting this form, you agree to our{' '}
                  <a href="/policy/privacy-policy" className="text-blue-600 underline text-gray-900" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>.
                </p>
                <div>
                  <input
                    type="submit"
                    id="formsubmit"
                    value="Submit"
                    className="w-full bg-red-600 text-white py-4 px-4 rounded-full hover:bg-blue-700 transition mb-2"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-[110px]"></div>
      </section>
    </>
  )
}
