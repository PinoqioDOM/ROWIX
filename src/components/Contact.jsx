import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const socialText = Array(12).fill("FOLLOW US ON SOCIAL MEDIA");

  return (
    <section>
      <div className="bg-[#CE7D63] text-black rounded-2xl mt-4 sm:mt-6 py-6 sm:py-8 md:py-10 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold leading-[1.1] mb-4 sm:mb-0">
          READY TO TRANSFORM YOUR DIGITAL PRESENCE?
        </h1>
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-5">
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] flex-1">
            Take the first step towards digital success with NexGen by your side.
            Our team of experts is eager to craft tailored solutions that drive
            growth for your business.
          </p>

          <button className="bg-black flex items-center gap-2 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg cursor-pointer transition duration-100 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 whitespace-nowrap">
            <span className="text-sm sm:text-base font-medium">GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] p-4 sm:p-5 md:p-6 mt-4 rounded-lg overflow-hidden">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 animate-marquee whitespace-nowrap">
          {socialText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="text-[#CE7D63] text-xl sm:text-2xl md:text-3xl">•</span>
              <p className="text-[#676665] text-sm sm:text-base md:text-lg">{text}</p>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}