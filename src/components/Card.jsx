import React from 'react'
import CardPhoto from '../assets/card-photo.png'

const Card = () => {
  return (
    <div className='flex-shrink-0 w-full sm:w-full md:w-full lg:w-[400px] mt-4 sm:mt-5 lg:mt-[20px]'>
      <div className="relative group cursor-pointer border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300 h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[446px] overflow-hidden">
          <img 
            src={CardPhoto}
            alt="Estatein Real Estate"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

          {/* Arrow Icon - Top Right */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-[#E4A287] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
            <svg 
              className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#1F1F1F] p-4 sm:p-5 lg:p-6">
          <h3 className="text-[#F9EFEC] text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 leading-tight">
            Estatein Real Estate
          </h3>
          <p className="text-[#B3B3B2] text-sm sm:text-base">
            Web Development
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card