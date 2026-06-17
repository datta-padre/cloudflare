import { useState, useEffect } from "react";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import ProductCard from "../comman/ProductCard";

const slides = [
  {
    image: "https://a2zithub.org/dairy/uploads/171354353746122831.webp",
    title: "Summer Sale 50% OFF",
    description: "Discover the latest fashion trends.",
    button: "Shop Now",
  },
  {
    image: "https://a2zithub.org/dairy/uploads/171354358665083344.webp",
    title: "Premium Headphones",
    description: "Best quality sound experience.",
    button: "Buy Now",
  },
  {
    image: "https://a2zithub.org/dairy/uploads/171601382516103680.jpg",
    title: "New Collection",
    description: "Trending products at amazing prices.",
    button: "Explore",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="relative h-[300px] md:h-[600px]">
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                {slides[current].title}
              </h1>

              <p className="text-sm md:text-xl mb-6">
                {slides[current].description}
              </p>

              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg">
                {slides[current].button}
              </button>
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2  p-3 rounded-full text-5xl text-white"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2  p-3 rounded-full text-5xl text-white"
          >
            ❯
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Best Selling Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
