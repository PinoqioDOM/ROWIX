import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'
import Art from '../assets/Art.png'
import BlueBloom from '../assets/BlueBloom.png'
import COO from '../assets/COO.png'
import HeathTech from '../assets/HeathTech.png'


export default function Testimonials () {
  const testimonials = [
    {
      id:1, 
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      text:"Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      img:BlueBloom,
      name:"Sarah Thompson",
      position:"CEO of BlueBloom",
    },
    {
      id:2, 
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      text:"Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      img:Art,
      name:"Wade Warren",
      position:"Art Director",
    },
    {
      id:3, 
      title: "WORKING WITH NEXGEN WAS A PLEASURE.",
      text:"Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      img:HeathTech,
      name:"Lisa Williams",
      position:"CEO Of HealthTech",
    },
    {
      id:4, 
      title: "NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
      text:"Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
      img:COO,
      name:"Jennifer Lee",
      position:"COO of Foodie Haven",
    },
  ]
  
  return ( 
    <div className='mt-6 rounded-2xl border border-[#CE7D63]'>
      <div className='border border-[#2A2A2A] rounded-2xl p-4 sm:p-6 lg:p-8'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 p-4 sm:p-6 border-b border-dotted border-[#2A2A2A] bg-[#1A1A1A] rounded-2xl gap-4'>
          <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl font-bold'>TESTIMONIALS</h1>
          <button className='flex items-center gap-2 px-4 py-2 text-sm text-gray-400 border border-transparent hover:border-[#CE7D63] hover:bg-[#CE7D63] hover:text-black hover:font-bold transition-all duration-300 rounded-2xl cursor-pointer whitespace-nowrap'>
            <ArrowUpRight className='w-4 h-4' />
            <span className='text-sm'>ALL TESTIMONIALS</span>
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className='bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4 sm:p-6 flex flex-col justify-between'>
              <div>
                <h4 className='text-white text-sm font-semibold mb-4'>{testimonial.title}</h4>
                <p className='text-gray-400 text-sm leading-relaxed mb-6'>{testimonial.text}</p>
              </div>
              
              <div className='bg-[#141414] rounded-lg p-4 flex items-center justify-between gap-3'>
                <div className='flex items-center gap-3 min-w-0 flex-1'>
                  <img src={testimonial.img} alt={testimonial.name} className='w-10 h-10 rounded-full bg-[#CE7D63] object-cover flex-shrink-0' />
                  <div className='min-w-0 flex-1'>
                    <div className='text-white text-sm font-medium truncate'>{testimonial.name}</div>
                    <div className='text-gray-500 text-xs truncate'>{testimonial.position}</div>
                  </div>
                </div>
                <div className='w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:bg-[#CE7D63] transition-colors cursor-pointer flex-shrink-0'>
                  <ArrowRight className='w-4 h-4 text-gray-400' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}