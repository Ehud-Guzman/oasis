export default function Footer() {
  return (
    <footer className="bg-[#ff9935]/10 border-t border-[#720e04]/20 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Tagline */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#720e04] mb-2">Oasis Gardens</h3>
          <p className="text-sm text-gray-600">
            Where celebrations blossom.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-[#720e04] mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-[#ff9935] transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#ff9935] transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ff9935] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Social */}
        <div>
          <h4 className="font-semibold text-[#720e04] mb-3">Get in touch</h4>
          <p className="text-sm text-gray-600 mb-2">hello@oasisgardens.com</p>
          <p className="text-sm text-gray-600 mb-4">+254 745 322 345</p>
          <p className="text-sm text-gray-600 mb-4">+254 734 322 345</p>
          <div className="flex space-x-4">
            {/* Social icons */}
            <a href="#" className="text-[#720e04] hover:text-[#ff9935] transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-[#720e04] hover:text-[#ff9935] transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.197.157 3.634.604 2.364 1.874.604 3.634.157 5.197.072 7.052.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.085 1.855.532 3.418 1.802 4.688 1.27 1.27 2.833 1.717 4.688 1.802 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.855-.085 3.418-.532 4.688-1.802 1.27-1.27 1.717-2.833 1.802-4.688.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.532-3.418-1.802-4.688-1.27-1.27-2.833-1.717-4.688-1.802C15.668.014 15.244 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-[#720e04]/20 text-sm text-center md:flex md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} Oasis Gardens & Caterers. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Website by <span className="font-semibold text-[#720e04]">GlimmerInk Creations</span>
        </p>
      </div>
    </footer>
  );
}