import React from 'react'

export default function Hero() {
  const services = [
    { name: 'MARKETING' },
    { name: 'WEBSITE DESIGN' },
    { name: 'BRANDING' },
    { name: 'WEBSITE DEVELOPMENT' },
    { name: 'MOBILE APP DEVELOPMENT' },
    { name: 'DIGITAL TRANSFORMATION' }
  ];

  return (
    <section className='bg-[#1A1A1A] mt-[20px] rounded-2xl px-8 lg:px-16 py-12 lg:py-16 flex-1 relative'>
      
      <div className='space-y-6'>
        <div className='flex items-start justify-between gap-8'>
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              DIGITAL SOLUTIONS
            </h1>
            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              THAT DRIVE SUCCESS
            </h2>
          </div>

          {/* Start Project Button */}
          <button className="absolute right-15 top-20 flex items-center gap-4 pl-3 pr-6 py-3 bg-transparent border-2 border-[#E4A287] rounded-full text-[#E4A287] hover:bg-[#E4A287] hover:text-black transition-all duration-300 whitespace-nowrap group flex-shrink-0 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#E4A287] flex items-center justify-center group-hover:bg-black transition-colors">
              <svg 
                className="w-5 h-5 text-black group-hover:text-[#E4A287]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <span className="font-semibold text-sm ">START A PROJECT</span>
          </button>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed">
          At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
        </p>

        {/* Services Ticker */}
        <div className="relative overflow-hidden py-4 bg-black rounded-2xl" style={{ height: '70px' }}>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="w-100 flex items-center gap-4 animate-scroll">
            {[...services, ...services, ...services].map((service, index) => (
              <div key={index} className="flex items-center gap-8 whitespace-nowrap shrink-0">
                <span className="text-[#B3B3B2] text-sm mt-1 text-center font-mono tracking-wider transition-colors hover:text-[#CE7D63] cursor-pointer">
                  {service.name}
                </span>
                <span className="text-[#CE7D63] text-2xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}