import React from 'react';

export default function ImageCard() {
  const cardData = [
    {
      image: "/assets/cross-connect-services.jpg",
      title: "Cross-Connect Services"
    },
    {
      image: "/assets/monitoring-support.jpg",
      title: "Remote Hands Support"
    },
    {
      image: "/assets/hybrid-cloud-interconnect.jpg",
      title: "Hybrid Cloud Interconnect"
    },
    {
      image: "/assets/power-infrastructure.jpg",
      title: "Tiered Redundancy Options"
    },
    {
      image: "/assets/private-cloud-as-a-service.jpg",
      title: "Private Cloud-as-a-Service (PCaaS)"
    },
    {
      image: "/assets/zero-downtime-migration.jpg",
      title: "Zero Downtime Migration"
    },
  ];

  return (
    <section className="hq-feature bg-white py-12">
      <div className="px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Unique Data Center Solutions
        </h2>
        <p className="text-black text-sm md:text-base mb-8">
          Build intelligently
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-md bg-cover bg-center h-80 overflow-hidden group"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute transition duration-300 ease-in-out"></div>
              <div className="absolute bottom-4 left-4 z-10 text-left text-white">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <button className="bg-white text-black text-sm font-medium px-4 py-1.5 rounded hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
