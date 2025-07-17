import Image from 'next/image';
import React from 'react';

const solutionsData = [
  {
    title: 'Hyperscale',
    description:
      "CyrusOne leads in hyperscale data center solutions, delivering the performance, availability, and scalability required by the world's largest companies. ",
    image: '/assets/cloud-icon.png',
    bgImage: '/assets/cloud-place.jpg',
    link: 'https://www.cyrusone.com/solutions/hyperscale?hsLang=en',
  },
  {
    title: 'Enterprise',
    description:
      'Tailored enterprise solutions that balance security, scalability, and operational efficiency for mid-to-large scale organizations in every sector.',
    image: '/assets/cloud-icon.png',
    bgImage: '/assets/cloud-place.jpg',
    link: 'https://www.cyrusone.com/solutions/enterprise?hsLang=en',
  },
  {
    title: 'Colocation',
    description:
      'Secure, scalable colocation services with industry-leading uptime and real-time monitoring capabilities across global locations.',
    image: '/assets/cloud-icon.png',
    bgImage: '/assets/cloud-place.jpg',
    link: 'https://www.cyrusone.com/solutions/colocation?hsLang=en',
  },
  {
    title: 'Connectivity',
    description:
      'Seamless, direct cloud interconnects ensuring ultra-low latency and highly resilient paths to AWS, Azure, Google Cloud and more.',
    image: '/assets/cloud-icon.png',
    bgImage: '/assets/cloud-place.jpg',
    link: 'https://www.cyrusone.com/solutions/cloud-connectivity?hsLang=en',
  },
    {
    title: 'Connectivity',
    description:
      'Seamless, direct cloud interconnects ensuring ultra-low latency and highly resilient paths to AWS, Azure, Google Cloud and more.',
    image: '/assets/cloud-icon.png',
    bgImage: '/assets/cloud-place.jpg',
    link: 'https://www.cyrusone.com/solutions/cloud-connectivity?hsLang=en',
  },
    {
    title: 'Connectivity',
    description:
      'Seamless, direct cloud interconnects ensuring ultra-low latency and highly resilient paths to AWS, Azure, Google Cloud and more.',
    image: '/assets/cloud-icon.png',
    bgImage: '/assets/cloud-place.jpg',
    link: 'https://www.cyrusone.com/solutions/cloud-connectivity?hsLang=en',
  },
];

export default function StylistCard() {
  return (
    <section className="py-14 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Solutions</h2>
          <h5 className="text-white text-sm md:text-base">Seamless data solutions for every industry.</h5>
        </div>
      </div>

      <div className="data-solutions-main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 px-4 max-w-[1680px] mx-auto">
        {solutionsData.map((solution, index) => (
          <div className="data-solutions-col has-effect bg-white rounded-xl shadow-md overflow-hidden" key={index}>
            <div
              className="col-header has-effect h-36 bg-cover bg-center"
              style={{ backgroundImage: `url(${solution.bgImage})` }}
            ></div>
            <div className="col-body has-effect p-5">
              <div className="icon mb-3">
                <Image src={solution.image} alt={solution.title} width={400} height={400} className="w-10 h-10" />
              </div>
              <h3 className="text-xl   text-gray-800 mb-2 text-[26px]">{solution.title}</h3>
              <p className="text-sm text-gray-600 mb-4 opacity-0">
                <span>{solution.description}</span>
              </p>
              <a
                className="btn-link text-blue-600 font-medium hover:underline"
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
