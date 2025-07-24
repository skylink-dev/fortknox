
'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CallMadeIcon from '@mui/icons-material/CallMade';

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

export default function FAQ({data}) {

const [openIndex, setOpenIndex] = useState(null);
 const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
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
  );
}