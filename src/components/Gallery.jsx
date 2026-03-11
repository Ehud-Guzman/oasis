const images = [
  {
    src: "/images/gold-plate.jpeg",
    alt: "Gold plate",
  },
  {
    src: "/images/guests.jpeg",
    alt: "Guests enjoying the restaurant",
  },
  {
    src: "/images/weddingsetup.jpeg",
    alt: "Wedding setup",
  },
  {
    src: "/images/kuku-kienyeji-dish.jpg",
    alt: "Kuku Kienyeji dish",
  },
  {
    src: "/images/mbuzi-choma.jpg",
    alt: "Mbuzi Choma dish",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#720e04] mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-[#ff9935] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A glimpse into the Oasis experience – where every moment is picture‑perfect.
          </p>
        </div>

        {/* Image Grid with fixed-height images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-72"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#720e04]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-semibold text-lg tracking-wide">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          More visuals coming soon – we're curating the perfect shots.
        </p>
      </div>
    </section>
  );
}