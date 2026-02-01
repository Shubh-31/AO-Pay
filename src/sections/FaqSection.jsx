"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FAQSection({ faqContent }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {faqContent.heading}
          </h2>
        </div>
        <div className=" mt-8 space-y-4 px-4">
          {faqContent.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 border border-gray-200 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {faq.icon}
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-gray-500 text-xl">
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
