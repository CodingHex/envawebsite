import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientsSection() {
  const brands = [
    { name: 'Abercrombie', src: '/brands/abercrombie.png' },
    { name: 'Converse', src: '/brands/converse.png' },
    { name: 'Dickies', src: '/brands/dickies.png' },
    { name: 'Hurley', src: '/brands/hurley.png' },
    { name: 'Kitlocker', src: '/brands/kitlocker.png' },
    { name: 'Lacoste', src: '/brands/lacoste.png' },
    { name: 'LC Waikiki', src: '/brands/lcwaikiki.png' },
    { name: "Levi's", src: '/brands/levis.png' },
    { name: 'Nike', src: '/brands/nike.png' },
    { name: 'Pull & Bear', src: '/brands/pullbear.png' },
    { name: 'VF Corporation', src: '/brands/vf.png' },
    { name: 'Zara', src: '/brands/zara.png' },
  ];

  const visibleCount = 3;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + visibleCount) % brands.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev - visibleCount < 0
        ? brands.length - visibleCount
        : prev - visibleCount
    );
  };

  const visibleBrands = brands.slice(index, index + visibleCount);

  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Trusted Clients
        </h2>
        <p className="text-primary text-xl font-semibold mb-6">
          Global Brands Partner With Us
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          ENVA is the manufacturing partner of choice for leading global brands.
          Our commitment to quality, compliance, and consistency makes us a
          trusted supplier worldwide.
        </p>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              bg-primary text-white p-3 rounded-full
              hover:bg-primary/90 transition
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Brands */}
          <div className="flex justify-center gap-12 items-center bg-gray-50 py-12 rounded-lg">
            {visibleBrands.map((brand) => (
              <div
                key={brand.name}
                className="w-40 h-20 flex items-center justify-center"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="
                    max-h-full max-w-full object-contain
                    opacity-80 hover:opacity-100 hover:scale-105
                    transition duration-300
                  "
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="
              absolute right-0 top-1/2 -translate-y-1/2
              bg-primary text-white p-3 rounded-full
              hover:bg-primary/90 transition
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 mt-8">
          Trusted by leading global brands
        </p>

      </div>
    </section>
  );
}
