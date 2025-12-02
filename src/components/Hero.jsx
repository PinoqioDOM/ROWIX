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
    <section className='bg-[#1A1A1A] mt-3 sm:mt-4 md:mt-5 lg:mt-[20px] rounded-xl sm:rounded-2xl flex-1 relative'>
      {/* Inner container with responsive padding and centering */}
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 max-w-[1600px] mx-auto'>
        <div className='space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8'>
          {/* Header with button */}
          <div className='flex flex-col lg:flex-row items-start lg:items-start justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
            <div className='w-full lg:flex-1'>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.1] md:leading-[1.1]">
                DIGITAL SOLUTIONS 
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] sm:leading-[1.1] md:leading-[1.1] mt-1 sm:mt-2">
                THAT DRIVE SUCCESS
              </h2>
            </div>

            {/* Start Project Button - Desktop */}
            <button className="hidden lg:flex items-center gap-3 xl:gap-4 pl-3 pr-4 xl:pr-6 py-2.5 xl:py-3 bg-transparent border-2 border-[#E4A287] rounded-full text-[#E4A287] hover:bg-[#E4A287] hover:text-black transition-all duration-300 whitespace-nowrap group flex-shrink-0 cursor-pointer self-start">
              <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-[#E4A287] flex items-center justify-center group-hover:bg-black transition-colors">
                <svg 
                  className="w-4 h-4 xl:w-5 xl:h-5 text-black group-hover:text-[#E4A287]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <span className="font-semibold text-xs xl:text-sm">START A PROJECT</span>
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-full lg:max-w-4xl">
            At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
          </p>

          {/* Start Project Button - Mobile & Tablet */}
          <button className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 pl-2.5 sm:pl-3 pr-4 sm:pr-5 py-2.5 sm:py-3 bg-transparent border-2 border-[#E4A287] rounded-full text-[#E4A287] hover:bg-[#E4A287] hover:text-black transition-all duration-300 active:scale-95 group cursor-pointer">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E4A287] flex items-center justify-center group-hover:bg-black transition-colors">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-[#E4A287]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <span className="font-semibold text-xs sm:text-sm">START A PROJECT</span>
          </button>

          {/* Services Ticker */}
          <div className="relative overflow-hidden py-2 sm:py-3 md:py-4 bg-black rounded-lg sm:rounded-xl md:rounded-2xl h-[45px] sm:h-[55px] md:h-[65px] lg:h-[70px]">
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
              @media (max-width: 640px) {
                .animate-scroll {
                  animation: scroll 15s linear infinite;
                }
              }
              @media (min-width: 641px) and (max-width: 1024px) {
                .animate-scroll {
                  animation: scroll 20s linear infinite;
                }
              }
            `}</style>
            <div className="w-100 flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 animate-scroll">
              {[...services, ...services, ...services, ...services].map((service, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 whitespace-nowrap shrink-0">
                  <span className="text-[#B3B3B2] text-[10px] xs:text-xs sm:text-sm md:text-base text-center font-mono tracking-wider transition-colors hover:text-[#CE7D63] cursor-pointer">
                    {service.name}
                  </span>
                  <span className="text-[#CE7D63] text-base sm:text-lg md:text-xl lg:text-2xl">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}