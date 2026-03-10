export default function Contact() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-green-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Whether it's a reservation, an event inquiry,
            or just a question – reach out anytime.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone Card */}
          <div className="bg-green-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
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
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-1">0745 322345</p>
            <p className="text-gray-600">0734 322345</p>
          </div>

          {/* Email Card */}
          <div className="bg-green-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Email Us</h3>
            <p className="text-gray-600">hello@oasisgardens.com</p>
            <p className="text-gray-600 text-sm mt-1">events@oasisgardens.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-green-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Garden Lane</p>
            <p className="text-gray-600">Serenity Valley, CA 98765</p>
          </div>
        </div>

        {/* WhatsApp & Additional Info */}
        <div className="flex flex-col items-center">
          <a
            href="https://wa.me/254745322345"
            className="group bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.55 3.92 1.6 5.62L2.2 22l4.6-1.47c1.65.92 3.5 1.4 5.42 1.4 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 17.95c-1.6 0-3.18-.43-4.56-1.24l-.33-.2-2.97.96.98-2.88-.2-.34c-.86-1.42-1.32-3.05-1.32-4.72 0-4.7 3.82-8.52 8.52-8.52s8.52 3.82 8.52 8.52-3.82 8.52-8.52 8.52z" />
              <path d="M16.6 13.9c-.27-.14-1.6-.8-1.84-.9-.25-.09-.43-.14-.62.14-.2.27-.74.9-.9 1.08-.17.18-.34.2-.62.07-.27-.14-1.15-.42-2.18-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.13-.13.27-.34.4-.5.14-.17.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.55-.45-.47-.62-.48-.16-.01-.34-.01-.53-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.82c.14.18 1.9 2.9 4.6 4.07.64.28 1.14.44 1.53.57.64.2 1.23.17 1.7.1.52-.07 1.6-.66 1.82-1.3.23-.63.23-1.17.16-1.28-.07-.11-.27-.17-.54-.3z" />
            </svg>
            Message us on WhatsApp
          </a>

          <p className="text-gray-500 mt-8 text-sm">
            We typically respond within a few hours.
          </p>
        </div>

        {/* Optional subtle background element */}
        <div className="absolute left-0 right-0 -z-10 h-64 bg-gradient-to-t from-green-50 to-transparent opacity-50"></div>
      </div>
    </section>
  );
}