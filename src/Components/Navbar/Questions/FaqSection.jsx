import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I schedule a property tour?",
    answer:
      "You can schedule a tour by filling out the contact form above or calling our support line. We’ll get back to you promptly.",
  },
  {
    question: "Is there any cost involved in viewing a property?",
    answer:
      "No, property viewings are completely free. We’re happy to help you find the perfect match without any fees.",
  },
  {
    question: "Can I get a mortgage consultation through your platform?",
    answer:
      "Yes! We offer free mortgage consultations with our partnered financial experts. Simply indicate your interest in the contact form.",
  },
  {
    question: "Are the property listings regularly updated?",
    answer:
      "Absolutely. Our listings are updated daily to ensure you see the most accurate and current information.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <section id="faqs" className="bg-white py-16 px-4">


      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>


        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-0 py-4 flex items-center justify-between text-gray-800 font-medium focus:outline-none border-b border-gray-200">
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {openIndex === index && (
                <div className="mt-2 text-gray-600 px-0 pb-4 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

