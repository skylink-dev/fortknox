
'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({data}) {

  if(data==undefined||data==null) return null;
  const [activeIndex, setActiveIndex] = useState(null);
  const [questionData,setQuestionData]=useState([])
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(()=>{
    setQuestionData(data?.cards)
  },[data])
  if(data==undefined&&data!=[]) return null;

  return (
    <div className="max-w-3xl md:max-w-full md:m-20 mx-auto px-4 py-8 p-2 md:p-6 bg-gray-100 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questionData.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              className="w-full px-5 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="font-medium text-lg md:text-xl">{faq.sub_title}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="text-gray-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 overflow-hidden"
                >
                  <div className="pb-5 md:text-lg pt-3 text-gray-600">
                    {faq.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}