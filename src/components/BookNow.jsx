export default function BookNow() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Book Your Experience
          </h2>
          <div className="w-24 h-1 bg-green-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Reserve a table, plan an event, or book our catering – we’ll make it unforgettable.
          </p>
        </div>

        {/* Two-column layout: Form + Info */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Booking Form – takes 3 columns on medium+ */}
          <div className="md:col-span-3 bg-green-50 rounded-2xl p-8 shadow-md border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Request a Booking</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition bg-white">
                    <option>1-2 guests</option>
                    <option>3-4 guests</option>
                    <option>5-6 guests</option>
                    <option>7-8 guests</option>
                    <option>9+ guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition bg-white">
                    <option>Dinner</option>
                    <option>Lunch</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Party</option>
                    <option>Catering Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your occasion or any special needs..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Info Sidebar – 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Opening Hours
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex justify-between"><span>Monday – Thursday</span> <span className="font-medium">11am – 10pm</span></li>
                <li className="flex justify-between"><span>Friday – Saturday</span> <span className="font-medium">11am – 11pm</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="font-medium">10am – 9pm (Brunch)</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
              <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Book With Us
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span> Lush garden setting with fairy lights
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span> Personalized event planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span> Premium catering for any occasion
                </li>
              </ul>
            </div>

            <div className="bg-green-600 text-white rounded-2xl p-6 shadow-md">
              <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Need Help?
              </h4>
              <p className="text-sm text-green-100 mb-3">Call us directly for instant assistance</p>
              <p className="font-bold text-lg">0745 322345</p>
              <p className="font-bold text-lg">0734 322345</p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 text-green-700 italic text-xl">
          “Where celebrations blossom.”
        </div>
      </div>
    </section>
  );
}