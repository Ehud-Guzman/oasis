export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo links to top */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-green-800 tracking-wide hover:scale-105 transition-transform duration-200"
        >
          Oasis Gardens
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
          <a
            href="#services"
            className="relative group transition-colors hover:text-green-700"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#gallery"
            className="relative group transition-colors hover:text-green-700"
          >
            Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative group transition-colors hover:text-green-700"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Book Now button */}
        <div className="flex items-center space-x-4">
          <a
            href="#book"
            className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Book Now
          </a>
          {/* Mobile menu icon */}
          <button className="md:hidden text-green-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}