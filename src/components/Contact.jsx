import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const socialText = Array(12).fill("FOLLOW US ON SOCIAL MEDIA");

  return (
    <section>
      <div className="bg-[#CE7D63] text-black rounded-2xl mt-6 py-10 px-6">
        <h1 className="text-[45px] font-semibold leading-[1.1]">
          READY TO TRANSFORM YOUR DIGITAL PRESENCE?
        </h1>
        <div className="flex items-center gap-5 ">
          <p className="mt-3 text-[18px]">
            Take the first step towards digital success with NexGen by your side.
            Our team of experts is eager to craft tailored solutions that drive
            growth for your business.
          </p>

          <button className="bg-black flex items-center text-white p-2 rounded-lg cursor-pointer  transition duration-100 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="text-white" />
          </button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] p-6 mt-4 rounded-lg overflow-hidden">
        <div className="flex items-center gap-5 animate-marquee whitespace-nowrap">
          {socialText.map((text, index) => (
            <React.Fragment key={index}>
              <span className="text-[#CE7D63] text-3xl">•</span>
              <p className="text-[#676665] text-lg">{text}</p>
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
      `}</style>
    </section>
  );
}