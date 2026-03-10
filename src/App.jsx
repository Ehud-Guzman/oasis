import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookNow from "./components/BookNow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Book Now Section */}
      <section id="book">
        <BookNow />
      </section>

      <Footer />
    </div>
  );
}

export default App;