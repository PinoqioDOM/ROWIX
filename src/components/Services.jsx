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
          <div className='bg-[#1A1A1A] p-6 mb-5 border-b border-[#1F1F1F]'>
            <h1 className='text-3xl font-semibold text-white tracking-widest'>OUR SERVICES</h1>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {services.map((service, index) => {
              const Icon = service.icon
              const isLastRow = index >= 2
              const isLeftColumn = index % 2 === 0
              
              return (
                <div 
                  key={service.id}
                  className={`
                    bg-[#0A0A0A] border border-[#DA9E8B] rounded-2xl p-8 flex flex-col justify-between min-h-[320px]
                    ${!isLeftColumn ? 'border-l border-[#1F1F1F]' : ''}
                    ${!isLastRow ? 'border-b border-[#1F1F1F]' : ''}
                  `}
                >
                  <div>
                    <div className='flex items-start justify-between mb-6'>
                      <div className='bg-[#FF6B35] bg-opacity-10 p-3 rounded-xl'>
                        <Icon className='w-6 h-6 text-black' />
                      </div>
                      <button className='flex items-center gap-2 p-2 text-sm text-gray-400 hover:border hover:border-2 hover:border-[#CE7D63] hover:bg-[#CE7D63] hover:text-black hover:text-bold transition-all duration-300 rounded-2xl cursor-pointer'>
                        <ArrowUpRight className='w-4 h-4' />
                        <span>{service.btn}</span>
                      </button>
                    </div>

                    <h2 className='text-xl font-semibold text-white mb-4'>
                      {service.title}
                    </h2>

                    <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                      {service.paragraph}
                    </p>
                  </div>

                  <div className='pt-4 border-t border-[#1F1F1F]'>
                    <p className='text-white font-semibold text-lg'>
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