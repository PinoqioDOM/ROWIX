import React from 'react'
import { ArrowUpRightFromCircle, ArrowUpRight, Star } from 'lucide-react'
import FitnessApp from '../assets/grid 1.png'
import Ecommerce from '../assets/grid 2.png'

export default function Works() {
  const works = [
    {
      id: 1,
      title: "ZENITH FITNESS APP",
      text: 'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.',
      category: 'Mobile App Development',
      time: "6 months",
      technologies: ['React Native', 'Firebase', 'Redux', 'REST API', 'MongoDB'],
      teamMembers: [
        { img: 'team 1.1.png' },
        { name: 'team 1.2.png' },
        { name: 'team 1.3.png' },
        { name: 'team 1.4.png' },
        { name: 'team 1,5.png' }
      ],
      image: FitnessApp,
    },
    {
      id: 2,
      title: "A-AURA ECOMMERCE",
      text: 'A complete overhaul of a corporate website to enhance its brand identity and user experience.',
      category: 'Web Design & Development',
      time: "3 months",
      technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
      teamMembers: [
        { name: 'team 2.1.png' },
        { name: 'team 2.2.png' },
        { name: 'team 2.3.png' },
        { name: 'team 2.4.png' },
        { name: 'team 2.5.png' }
      ],
      image: Ecommerce,

    }
  ]

  return (
    <div className="bg-black text-white p-4 sm:p-6 lg:p-8 min-h-screen border border-[#CE7D63] mt-4 rounded-2xl">
      {/* Header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1A1A1A] p-4 sm:p-6 rounded-2xl mb-6 gap-4'>
        <h1 className='text-2xl sm:text-3xl font-bold'>OUR WORKS</h1>
        <button className='flex items-center gap-2 px-4 py-2 text-sm text-gray-400 border border-transparent hover:border-[#CE7D63] hover:bg-[#CE7D63] hover:text-black hover:font-bold transition-all duration-300 rounded-2xl cursor-pointer whitespace-nowrap'>
          <ArrowUpRightFromCircle className='w-4 h-4' />
          <span>ALL WORKS</span>
        </button>
      </div>

      {/* Works Grid */}
      <div className='space-y-6'>
        {works.map((work) => (
          <div key={work.id} className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6'>
            
            {/* Grid 1: Project Info */}
            <div className='border border-[#CE7D63] rounded-2xl p-4 sm:p-6 flex flex-col justify-between'>
              <div>
                <div className='flex flex-wrap items-center gap-3 mb-6'>
                  <div className='w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Star className='w-6 h-6 text-white fill-white' />
                  </div>
                  <h2 className='text-base sm:text-lg font-bold flex-1 min-w-0'>{work.title}</h2>

                  <button className='flex items-center gap-1 text-sm text-gray-400 hover:text-white cursor-pointer whitespace-nowrap'>
                    <ArrowUpRight className='w-4 h-4' />
                    <span>DETAILS</span>
                  </button>
                </div>

                <div className='space-y-2 mb-6'>
                  <p className='text-xs sm:text-sm text-gray-400 border border-gray-900 w-fit p-2 rounded-2xl bg-[#1F1F1F]'>
                    Category · <span className='text-white font-bold'>{work.category}</span>
                  </p>
                  <p className='text-xs sm:text-sm text-gray-400 border border-gray-900 w-fit p-2 rounded-2xl bg-[#1F1F1F]'>
                    Time Taken · <span className='text-white font-bold'>{work.time}</span>
                  </p>
                </div>

                <p className='text-gray-300 text-sm leading-relaxed'>{work.text}</p>
              </div>
            </div>

            {/* Grid 2: Image */}
            <div className='border border-[#CE7D63] rounded-2xl p-4 flex items-center justify-center bg-gray-900 overflow-hidden min-h-[250px] sm:min-h-[300px]'>
              <img 
                src={work.image} 
                alt={work.title}
                className='w-full h-full object-cover rounded-xl'
              />
            </div>

            {/* Grid 3: Technologies, Team, Button (3 sections stacked) */}
            <div className='flex flex-col gap-4'>
              
              {/* Section 1: Technologies */}
              <div className='border border-[#CE7D63] bg-[#1A1A1A] rounded-xl p-4 flex-1'>
                <h3 className='text-xs sm:text-sm font-bold mb-3 text-gray-400 tracking-wider'>TECHNOLOGIES USED</h3>
                <div className='flex flex-wrap gap-2'>
                  {work.technologies.map((tech, i) => (
                    <span key={i} className='px-3 sm:px-4 py-1.5 bg-gray-800 text-xs sm:text-sm font-bold rounded-lg text-gray-300'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 2: Team Members */}
              <div className='border border-[#CE7D63] bg-[#1A1A1A] rounded-xl p-4'>
                <h3 className='text-xs font-bold mb-3 text-gray-400 tracking-wider'>TEAM MEMBERS</h3>
                <div className='flex flex-wrap gap-2'>
                  {work.teamMembers.map((member, i) => (
                    <div 
                      key={i} 
                      className='w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold overflow-hidden flex-shrink-0'
                      title={member.name}
                    >
                      <img 
                        src={`https://i.pravatar.cc/150?img=${i + 1}`} 
                        alt={member.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Book a Call Button */}
              <button className='w-full bg-[#CE7D63] hover:bg-[#b86b54] text-black font-bold py-3 sm:py-4 rounded-xl transition-colors duration-300 text-xs sm:text-sm tracking-wider cursor-pointer'>
                BOOK A CALL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}