import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ['HOME', 'SERVICES', 'PROJECTS', 'ABOUT', 'CAREERS', 'BLOGS'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-[#1A1A1A] rounded-2xl'>
      {/* Desktop & Mobile Header */}
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-6'>
        {/* Logo */}
        <h1 className='text-[#F3DFD8] text-2xl sm:text-3xl font-bold'>NexGen</h1>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-3'>
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-white font-bold bg-black px-4 xl:px-6 py-3 xl:py-4 rounded-xl transition cursor-pointer hover:bg-[#DA9E8B] hover:text-black transition-all duration-500 text-sm xl:text-base"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#CE7D63] text-white font-bold px-4 xl:px-6 py-3 xl:py-4 rounded-xl hover:bg-[#b86b54] transition font-medium text-sm xl:text-base"
          >
            CONTACTS
          </a>
        </nav>

        {/* Tablet Navigation (md to lg) */}
        <nav className='hidden md:flex lg:hidden items-center gap-2'>
          {navLinks.slice(0, 4).map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-white font-bold bg-black px-3 py-2.5 rounded-xl transition cursor-pointer hover:bg-[#DA9E8B] hover:text-black transition-all duration-500 text-xs"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-[#CE7D63] text-white font-bold px-3 py-2.5 rounded-xl hover:bg-[#b86b54] transition font-medium text-xs"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className='md:hidden text-white p-2 hover:bg-black/30 rounded-lg transition'
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='flex flex-col gap-2 px-4 pb-4'>
          {navLinks.map((link, index) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white font-bold bg-black px-4 py-3 rounded-xl transition cursor-pointer hover:bg-[#DA9E8B] hover:text-black transition-all duration-300 text-center"
              style={{
                animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {link}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#CE7D63] text-white font-bold px-4 py-3 rounded-xl hover:bg-[#b86b54] transition font-medium text-center"
            style={{
              animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${navLinks.length * 0.05}s forwards` : 'none',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            CONTACTS
          </a>
        </nav>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;