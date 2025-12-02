import React from 'react'
import { Palette, Code, Smartphone, TrendingUp, ArrowUpRight } from 'lucide-react'

export default function Services() {
  const services = [
    { 
      id: 1, 
      title: "WEB DESIGN", 
      paragraph: 'Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.', 
      icon: Palette,
      btn: 'BOOK A CALL', 
      pay: "STARTS FROM $1,500"
    },
    { 
      id: 2, 
      title: "WEB DEVELOPMENT", 
      paragraph: 'Our Web Development service is all about creating visually stunning and user-friendly websites that leave a lasting.', 
      icon: Code,
      btn: 'BOOK A CALL', 
      pay: "STARTS FROM $1,800"
    },
    { 
      id: 3, 
      title: "MOBILE APP DEVELOPMENT", 
      paragraph: 'Our Mobile App Development service is all about creating visually stunning and user-friendly websites that leave a lasting.', 
      icon: Smartphone,
      btn: 'BOOK A CALL', 
      pay: "STARTS FROM $2,500"
    },
    { 
      id: 4, 
      title: "DIGITAL MARKETING", 
      paragraph: 'Our Digital Marketing service is all about creating visually stunning and user-friendly websites that leave a lasting.', 
      icon: TrendingUp,
      btn: 'BOOK A CALL', 
      pay: "STARTS FROM $1,200"
    },
  ]

  return (
    <div className='bg-black'>
      <div>
        <div className='border border-[#1F1F1F] rounded-2xl overflow-hidden bg-black'>
          <div className='bg-[#1A1A1A] p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 border-b border-[#1F1F1F]'>
            <h1 className='text-2xl sm:text-3xl font-semibold text-white tracking-widest'>OUR SERVICES</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-0'>
            {services.map((service) => {
              const Icon = service.icon
              
              return (
                <div 
                  key={service.id}
                  className='bg-[#0A0A0A] border border-[#DA9E8B] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px]'
                >
                  <div>
                    <div className='flex items-start justify-between mb-4 sm:mb-6'>
                      <div className='bg-[#FF6B35] bg-opacity-10 p-2.5 sm:p-3 rounded-xl'>
                        <Icon className='w-5 h-5 sm:w-6 sm:h-6 text-black' />
                      </div>
                      <button className='flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400 border border-transparent hover:border-[#CE7D63] hover:bg-[#CE7D63] hover:text-black hover:font-bold transition-all duration-300 rounded-xl cursor-pointer'>
                        <ArrowUpRight className='w-3 h-3 sm:w-4 sm:h-4' />
                        <span className="hidden sm:inline">{service.btn}</span>
                        <span className="sm:hidden">BOOK</span>
                      </button>
                    </div>

                    <h2 className='text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4'>
                      {service.title}
                    </h2>

                    <p className='text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6'>
                      {service.paragraph}
                    </p>
                  </div>

                  <div className='pt-3 sm:pt-4 border-t border-[#1F1F1F]'>
                    <p className='text-white font-semibold text-base sm:text-lg'>
                      {service.pay}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}