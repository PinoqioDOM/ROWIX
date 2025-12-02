import React, { useState, useEffect, useRef } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({})
  const sectionRef = useRef(null)

  const stats = [
    { id: 1, title: "CLIENTS", num: 200, suffix: '+' },
    { id: 2, title: "PROJECTS", num: 280, suffix: '+' },
    { id: 3, title: "HAPPY CLIENTS", num: 100, suffix: '%'},
    { id: 4, title: "FOLLOWER", num: 420, suffix: 'K' },
    { id: 5, title: "Years Of Experience", num: 10, suffix: '+' },
  ]

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach(stat => {
      let currentCount = 0
      const increment = stat.num / steps

      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.num) {
          setCounts(prev => ({ ...prev, [stat.id]: stat.num }))
          clearInterval(timer)
        } else {
          setCounts(prev => ({ ...prev, [stat.id]: Math.floor(currentCount) }))
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <div ref={sectionRef} className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 border-2 border-[#1F1F1F] mt-4 sm:mt-5 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-[#0A0A0A]'>
      {stats.map(stat => (
        <div key={stat.id} className='bg-[#1A1A1A] py-6 sm:py-8 px-3 sm:px-4 md:px-6 rounded-2xl text-center border border-[#2A2A2A] hover:border-[#DA9E8B] transition-all duration-300 cursor-pointer'>
          <h3 className='text-[#B3B3B2] text-[10px] sm:text-xs mb-2 sm:mb-3 tracking-wide uppercase'>{stat.title}</h3>
          <span className='text-[#DA9E8B] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider'>
            {counts[stat.id] || 0}{stat.suffix}
          </span>
        </div>
      ))}
      
      <div className='bg-[#1A1A1A] py-6 sm:py-8 px-3 sm:px-4 md:px-6 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border border-[#2A2A2A] hover:border-[#DA9E8B] transition-all duration-300 cursor-pointer group'>
        <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-[#DA9E8B] flex items-center justify-center group-hover:bg-[#DA9E8B] transition-all duration-300 flex-shrink-0'>
          <svg className='text-[#DA9E8B] group-hover:text-[#1A1A1A] transition-colors duration-300' width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10M7 17L17 7"/>
          </svg>
        </div>
        <div className='text-[#B3B3B2] text-sm sm:text-base md:text-lg lg:text-xl text-center font-bold tracking-wide uppercase'>KNOW MORE</div>
      </div>
    </div>
  )
}