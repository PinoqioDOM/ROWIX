import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Journey () {
  const journey = [
    {
      id: 1,
      title: "Expertise in Cutting-Edge Technologies",
      text: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
      icontxt: "Learn More",
    },
    {
      id: 2,
      title: "Proven Track Record of Success",
      text: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
      icontxt: "Learn More",
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      text: "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
      icontxt: "Learn More",
    },
    {
      id: 4,
      title: "Dedicated Team of Professionals",
      text: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
      icontxt: "Learn More",
    },
  ]
  return (
    <div className='bg-black p-6 border-2 border-[#1F1F1F] my-5 rounded-2xl bg-[#0A0A0A]'>
      <h1 className='text-3xl font-bold text-white mb-8 border-2 border-[#1F1F1F] p-4 rounded-xl bg-[#1A1A1A]'>Reasons to Choose NexGen for Your Digital Journey</h1>

      <div className='grid grid-cols-4 gap-5'>
        {journey.map(item => (
          <div key={item.id} className='bg-[#1A1A1A] p-8 rounded-lg flex flex-col justify-between min-w-[300px]'>
            <div>
              <h2 className='text-white text-[30px] font-medium mb-4 uppercase tracking-wide leading-tight'>{item.title}</h2>
              <p className='text-gray-400 text-sm leading-relaxed'>{item.text}</p>
            </div>

            <div className='flex items-center gap-2 mt-6 cursor-pointer cursor-pointer hover:translate-x-1 group-hover:-translate-y-1 transition-transform'>
              <ArrowUpRight className='text-white w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
              <span className='text-white text-sm hover:translate-x-1 group-hover:-translate-y-1 transition-transform'>{item.icontxt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}