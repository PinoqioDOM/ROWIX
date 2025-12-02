import { Instagram, Twitter, Dribbble, ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Footer() {
  const contacts = [
    {
      id: 1,
      title: "INSTAGRAM",
      text: "Share visually appealing snippets of our latest web projects.",
      icon: Instagram,
      link: "#"
    },
    {
      id: 2,
      title: "TWITTER",
      text: "Tweet about interesting coding challenges you've overcome.",
      icon: Twitter,
      link: "#"
    },
    {
      id: 3,
      title: "DRIBBBLE",
      text: "Showcase design elements of our web projects.",
      icon: Dribbble,
      link: "#"
    },
    {
      id: 4,
      title: "BEHANCE",
      text: "Create detailed presentations for our projects.",
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
      link: "#"
    },
  ]

  const navigationSections = [
    {
      title: "Home",
      links: ["Why Us", "About Us", "Testimonials", "FAQ's"]
    },
    {
      title: "Services",
      links: ["Web Development", "App Development", "Web Design", "Digital Marketing"]
    },
    {
      title: "Projects",
      links: ["Klothink", "Zenith", "Novus", "Apex"]
    },
    {
      title: "Blogs",
      links: [
        { text: "Business", tag: null },
        { text: "Design", tag: "Soon" },
        { text: "Development", tag: "Soon" }
      ]
    }
  ]

  return (
    <footer className="bg-black text-gray-400 py-4 mt-6">
      <div className='h-full'>
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Social Links (2x2 Grid) */}
          <div>
            <div className="grid grid-cols-2 h-full gap-3 sm:gap-4 md:gap-6">
              {contacts.map((contact) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={contact.id}
                    href={contact.link}
                    className="bg-[#1A1A1A] rounded-lg p-4 sm:p-5 md:p-6 transition-colors group hover:bg-[#1F1F1F]"
                  >
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="bg-[#1F1F1F] border border-[#CE7D63] p-2 sm:p-2.5 md:p-3 rounded-lg group-hover:scale-105 hover:bg-white transition-transform">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#CE7D63] fill-amber-900" />
                      </div>
                      <div className="p-1.5 sm:p-2 rounded-full group-hover:scale-105 transition-transform border border-[#CE7D63] hover:bg-[#CE7D63]">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"/>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2 mt-6 sm:mt-8 md:mt-10">{contact.title}</h3>
                    <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm leading-relaxed">{contact.text}</p>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Column - Navigation, Newsletter, Footer */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Navigation Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-5 md:p-6 bg-[#1A1A1A] rounded-lg">
              {navigationSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {typeof link === 'string' ? (
                          <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                            {link}
                          </a>
                        ) : (
                          <div className="flex items-center gap-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                              {link.text}
                            </a>
                            {link.tag && (
                              <span className="text-[10px] sm:text-xs text-gray-500">{link.tag}</span>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#1A1A1A] rounded-lg">
              <p className="text-gray-500 text-[10px] sm:text-xs mb-2 tracking-wider">NEWSLETTER</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h2>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border-b bg-transparent py-2 sm:py-3 text-sm sm:text-base text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                />
                <button className="bg-zinc-800 p-2 sm:p-3 rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer flex-shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Footer Bottom Links */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 text-xs sm:text-sm p-4 sm:p-5 rounded-lg bg-[#1A1A1A]">
              <p className="text-gray-500">
                © 2024 NextGen. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6 md:gap-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}