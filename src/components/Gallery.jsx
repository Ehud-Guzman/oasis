import { useState, useEffect } from "react";


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
  // Add more images as needed – they will automatically fit the grid
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-green-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A glimpse into the Oasis experience – where every moment is picture‑perfect.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with zoom effect */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />

              {/* Sleek overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                <span className="text-white font-semibold text-lg tracking-wide">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional note about adding your own images */}
        <p className="text-center text-gray-500 text-sm mt-8">
          More visuals coming soon – we're curating the perfect shots.
        </p>
      </div>
    </section>
  );
}