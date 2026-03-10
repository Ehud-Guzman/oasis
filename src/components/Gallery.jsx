const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
]

export default function Gallery() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="rounded-xl shadow"
          />
        ))}
      </div>
    </section>
  )
}