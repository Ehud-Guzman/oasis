export default function BookNow() {
  return (
    <section className="py-20 px-6 bg-[#fff7ef]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#720e04] mb-4">
            Book Your Experience
          </h2>

          <div className="w-24 h-1 bg-[#ff9935] mx-auto rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Reserve a table, plan an event, or book our catering – we’ll make it unforgettable.
          </p>
        </div>


        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Booking Form */}
          <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-lg border border-orange-100">

            <h3 className="text-2xl font-bold text-[#720e04] mb-6">
              Request a Booking
            </h3>

            <form className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition"
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition"
                  />
                </div>

              </div>


              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>

                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition"
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>

                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition"
                  />
                </div>

              </div>


              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>

                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition bg-white">
                    <option>1-2 guests</option>
                    <option>3-4 guests</option>
                    <option>5-6 guests</option>
                    <option>7-8 guests</option>
                    <option>9+ guests</option>
                  </select>
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>

                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition bg-white">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us about your occasion or any special needs..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#ff9935] focus:ring-1 focus:ring-[#ff9935] outline-none transition resize-none"
                ></textarea>
              </div>


              <button
                type="submit"
                className="w-full bg-[#ff9935] hover:bg-[#e8892d] text-white font-semibold py-4 px-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300"
              >
                Submit Request
              </button>

            </form>
          </div>


          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">

            <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
              <h4 className="text-lg font-bold text-[#720e04] mb-3">
                Opening Hours
              </h4>

              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Monday – Thursday</span>
                  <span className="font-medium">11am – 10pm</span>
                </li>

                <li className="flex justify-between">
                  <span>Friday – Saturday</span>
                  <span className="font-medium">11am – 11pm</span>
                </li>

                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">10am – 9pm</span>
                </li>
              </ul>
            </div>


            <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
              <h4 className="text-lg font-bold text-[#720e04] mb-3">
                Why Book With Us
              </h4>

              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✓ Authentic African grill experience</li>
                <li>✓ Beautiful garden setting</li>
                <li>✓ Catering for weddings & events</li>
              </ul>
            </div>


            <div className="bg-[#720e04] text-white rounded-2xl p-6 shadow-md">
              <h4 className="text-lg font-bold mb-2">
                Need Help?
              </h4>

              <p className="text-sm text-orange-200 mb-3">
                Call us directly for instant assistance
              </p>

              <p className="font-bold text-lg">0745 322345</p>
              <p className="font-bold text-lg">0734 322345</p>
            </div>

          </div>
        </div>


        <div className="text-center mt-16 text-[#720e04] italic text-xl">
          “Where celebrations blossom.”
        </div>

      </div>
    </section>
  );
}