export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
 {/* Background Image with subtle zoom effect */}
<img
  src="/images/oasis-hero.jpg"
  alt="Oasis Gardens"
  className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-slowZoom"
/>

      {/* Gradient Overlay (softer than solid black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        {/* Small Tagline above main title */}
        <p className="text-green-300 font-semibold tracking-widest uppercase mb-3 animate-fadeInDown">
          Welcome to
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg animate-fadeInUp">
          Oasis Gardens <span className="text-green-300">&</span> Caterers
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
          Bar • Grill • Restaurant • Events • Outside Catering
        </p>

        <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg animate-fadeInUp animation-delay-400">
          A serene garden venue where celebrations blossom — perfect for dining,
          gatherings, and unforgettable moments.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fadeInUp animation-delay-600">
          {/* Call Button with phone icon */}
          <a
            href="tel:0745322345"
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now
          </a>

          {/* WhatsApp Button with icon */}
          <a
            href="https://wa.me/254745322345"
            className="group bg-white text-green-700 px-8 py-4 rounded-full font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.55 3.92 1.6 5.62L2.2 22l4.6-1.47c1.65.92 3.5 1.4 5.42 1.4 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 17.95c-1.6 0-3.18-.43-4.56-1.24l-.33-.2-2.97.96.98-2.88-.2-.34c-.86-1.42-1.32-3.05-1.32-4.72 0-4.7 3.82-8.52 8.52-8.52s8.52 3.82 8.52 8.52-3.82 8.52-8.52 8.52z" />
              <path d="M16.6 13.9c-.27-.14-1.6-.8-1.84-.9-.25-.09-.43-.14-.62.14-.2.27-.74.9-.9 1.08-.17.18-.34.2-.62.07-.27-.14-1.15-.42-2.18-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.13-.13.27-.34.4-.5.14-.17.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.55-.45-.47-.62-.48-.16-.01-.34-.01-.53-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.82c.14.18 1.9 2.9 4.6 4.07.64.28 1.14.44 1.53.57.64.2 1.23.17 1.7.1.52-.07 1.6-.66 1.82-1.3.23-.63.23-1.17.16-1.28-.07-.11-.27-.17-.54-.3z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-slowZoom {
          animation: slowZoom 10s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}