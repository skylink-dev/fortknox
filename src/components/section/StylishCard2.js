import Link from 'next/link';
import React from 'react';

const cardData = [
    {
        title: "Scalable Infrastructure",
        description: "Grow from single VMs to full racks with no disruption.",
        image:"/assets/scalable-infrastructure.jpg"
    },
    {
        title: "Carrier-Neutral Access",
        description: "Connect to multiple ISPs, IXPs, and cloud platforms.",
        image:"/assets/carrier-neutral-access.jpg"
    },
    {
        title: "Security-First Design",
        description: "Biometric access, CCTV, firewalls, and data encryption.",
        image:"/assets/security-first-design.jpg"
    },
    {
        title: "Custom ISP & Enterprise Plans",
        description: "Tailored packages for resellers, businesses, and hyperscale users.",
        image:"/assets/custom-isp-enterprise-plans.jpg"
    },
];

export default function StylishCard2() {
    return (
        <section
            className="research-section page-section order-7 bg-white py-12 bg-cover bg-center"
        >
            <div className="container mx-auto px-4">
                <div className="research-section-content">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Solutions</h2>
                        <h5 className="text-black text-sm md:text-base">Seamless data solutions for every industry.</h5>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden h-[480px] group"
                            style={{
                                backgroundImage: `url(${item.image})`, // 🔁 Replace with actual image
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Dark overlay for better text contrast */}
                            <div className="absolute"></div>

                            {/* Content block */}
                            <div className="relative z-10 p-5 flex flex-col h-full justify-start text-white">
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-sm opacity-90">{item.description}</p>
                            </div>
                            <div className="absolute top-0 right-0 z-10">
                                <Link href="#" target="_blank">
                                    <svg fill="none" height="51" viewBox="0 0 50 51" width="50" xmlns="http://www.w3.org/2000/svg">
                                        <rect fill="#ff0000" height="50" rx="25" width="50" y="0.138916"></rect>
                                        <path clipRule="evenodd" d="M18.8128 31.3262C18.3857 30.8991 18.3857 30.2065 18.8128 29.7794L27.4749 21.1173L19.8956 21.1173C19.2976 21.1173 18.8128 20.6326 18.8128 20.0346C18.8128 19.4366 19.2976 18.9518 19.8956 18.9518L29.4372 18.9518C30.4037 18.9518 31.1872 19.7353 31.1872 20.7018L31.1872 30.2435C31.1872 30.8414 30.7024 31.3262 30.1044 31.3262C29.5064 31.3262 29.0217 30.8414 29.0217 30.2435L29.0217 22.6641L20.3596 31.3262C19.9325 31.7533 19.24 31.7533 18.8128 31.3262Z" fill="#ffffff" fillRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                            <div className="decorative-curve bg-lumen-purple-3"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
