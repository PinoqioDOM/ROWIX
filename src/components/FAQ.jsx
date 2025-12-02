import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const faqs = [
    {
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer: "Yes, we have extensive experience in developing large-scale mobile applications. Our team uses modern frameworks and follows best practices to ensure scalability and performance."
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer: "Absolutely! We specialize in integrating various third-party APIs including payment gateways, social media platforms, analytics tools, and custom REST/GraphQL APIs."
    },
    {
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We utilize cross-platform frameworks like React Native and Flutter, conduct thorough testing on multiple devices, and follow platform-specific design guidelines to ensure seamless performance across iOS and Android."
    },
    {
      question: "What is your approach to user experience (UX) design?",
      answer: "Our UX design process is user-centered, starting with research and user personas, creating wireframes and prototypes, conducting usability testing, and iterating based on feedback to create intuitive and engaging experiences."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Your question has been sent!');
    setFormData({ name: '', email: '', question: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mt-4 sm:mt-6 rounded-2xl border border-[#CE7D63] p-4 sm:p-5 md:p-6">
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1A1A1A] mb-6 sm:mb-8 p-4 sm:p-5 md:p-6 border border-[#2A2A2A] rounded-2xl gap-3 sm:gap-0">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-gray-400 text-xs sm:text-sm transition-colors hover:bg-[#CE7D63] hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap">
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>VIEW ALL</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* FAQ List */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#151515] rounded-lg border border-[#2A2A2A] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-[#1A1A1A] transition-colors"
                >
                  <span className="text-white text-sm sm:text-base font-medium pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-[#151515] rounded-lg border border-[#2A2A2A] p-5 sm:p-6 md:p-8">
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-5 sm:mb-6">ASK YOUR QUESTION</h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#CE7D63] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#CE7D63] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  YOUR QUESTION
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Enter Your Question Here ....."
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#CE7D63] transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 sm:py-4 bg-[#CE7D63] hover:bg-[#B86D53] text-black text-sm sm:text-base font-bold rounded-lg transition-colors"
              >
                SEND YOUR MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}