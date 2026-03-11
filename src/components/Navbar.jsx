import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-[#ff9935]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-[#720e04] tracking-wide hover:scale-105 transition-transform duration-200"
          onClick={closeMenu}
        >
          Oasis Gardens
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-[#720e04]">
          {["Services", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group transition-colors hover:text-[#ff9935]"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#ff9935] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Book Now + Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href="#book"
            className="hidden md:inline-block bg-[#ff9935] hover:bg-[#e68425] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            onClick={closeMenu}
          >
            Book Now
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#720e04] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#ff9935] shadow-lg animate-slideDown">
          <div className="flex flex-col items-center py-6 space-y-4 text-[#720e04] font-medium">
            {["Services", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#ff9935] transition-colors"
                onClick={closeMenu}
              >
                {link}
              </a>
            ))}
            <a
              href="#book"
              className="bg-[#ff9935] hover:bg-[#e68425] text-white font-semibold px-8 py-2 rounded-full shadow-md transition-all duration-200"
              onClick={closeMenu}
            >
              Book Now
            </a>
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.2s ease-out; }
      `}</style>
    </nav>
  );
}