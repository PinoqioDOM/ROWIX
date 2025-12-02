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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
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
    <div ref={sectionRef} className='grid grid-cols-6 gap-5 border-2 border-[#1F1F1F] mt-5 rounded-2xl p-10 bg-[#0A0A0A]'>
      {stats.map(stat => (
        <div key={stat.id} className='bg-[#1A1A1A] py-8 px-6 rounded-2xl text-center border border-[#2A2A2A] hover:border-[#DA9E8B] transition-all duration-300 cursor-pointer'>
          <h3 className='text-[#B3B3B2] text-xs mb-3 tracking-wide uppercase'>{stat.title}</h3>
          <span className='text-[#DA9E8B] text-4xl font-bold tracking-wider'>
            {counts[stat.id] || 0}{stat.suffix}
          </span>
        </div>
      ))}
      
      <div className='bg-[#1A1A1A] py-8 px-6 rounded-2xl flex items-center border border-[#2A2A2A] hover:border-[#DA9E8B] transition-all duration-300 cursor-pointer group'>
        <div className='w-14 h-14 rounded-full border-2 border-[#DA9E8B] flex items-center justify-center group-hover:bg-[#DA9E8B] transition-all duration-300'>
          <svg className='text-[#DA9E8B] group-hover:text-[#1A1A1A] transition-colors duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10M7 17L17 7"/>
          </svg>
        </div>
        <div className='text-[#B3B3B2] mb-3 text-xl text-center mt-2 font-bold tracking-wide uppercase'>KNOW MORE</div>
      </div>
    </div>
  )
}