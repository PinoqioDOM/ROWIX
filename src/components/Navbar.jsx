import React from 'react'

const Navbar = () => {
  const navLinks = ['HOME', 'SERVICES', 'PROJECTS', 'ABOUT', 'CAREERS', 'BLOGS'];

  return (
    <div className='flex items-center justify-between bg-[#1A1A1A] px-12 py-6 rounded-2xl'>
        <h1 className='text-[#F3DFD8] text-3xl font-bold'>NexGen</h1>

        <nav className='flex items-center gap-3'>
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-white font-bold hover:text-gray-300 bg-black px-6 py-4 rounded-xl transition"
              >
                {link}
              </a>
            ))}
            <a href="#contact" className="bg-[#CE7D63] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#b86b54] transition font-medium">
              CONTACTS
            </a>
        </nav>
    </div>
  )
}

export default Navbar