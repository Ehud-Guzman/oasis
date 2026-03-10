// servicesData.js (optional – you can keep inline)
const services = [
  {
    name: "Bar",
    icon: "🍸",
    description: "Handcrafted cocktails and a curated wine list in a stylish, open‑air setting.",
  },
  {
    name: "Grill",
    icon: "🍔",
    description: "Premium grilled specialties prepared fresh over an open flame.",
  },
  {
    name: "Restaurant",
    icon: "🍽️",
    description: "Indoor & outdoor seating with a menu inspired by nature's bounty.",
  },
  {
    name: "Event Hosting",
    icon: "🎉",
    description: "Weddings, corporate events, and private parties in our flexible garden spaces.",
  },
  {
    name: "Outside Catering",
    icon: "🥂",
    description: "We bring the Oasis experience to your venue – anywhere, anytime.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-green-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            From intimate dinners to grand celebrations – we offer a complete
            garden experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-green-100 hover:border-green-200"
            >
              {/* Icon with circular background */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mb-5 group-hover:bg-green-200 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Service Name */}
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Subtle CTA */}
              <a
                href="#"
                className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-1 transition-colors"
              >
                Learn more
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Optional extra row – you could add a "View all" button or a note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Custom packages available for every occasion.
          </p>
        </div>
      </div>
    </section>
  );
}