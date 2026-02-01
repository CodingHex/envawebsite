import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type LogoItem = {
  src: string;
  alt: string;
};

type Props = {
  items: LogoItem[];
  autoplayInterval?: number;
  showControls?: boolean;
};

/**
 * Client Logo Carousel Component
 * Professional carousel for displaying client/brand logos
 * Features:
 * - Auto-scrolling with smooth transitions
 * - Manual navigation with arrow buttons
 * - Responsive design
 * - Hover effects and animations
 */
export default function ClientLogoCarousel({
  items,
  autoplayInterval = 4000,
  showControls = true,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplay || items.length === 0) return;

    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoplayInterval);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, items.length, autoplayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setIsAutoplay(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsAutoplay(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  if (items.length === 0) return null;

  // Calculate visible items (show 5 items at once on desktop, 3 on tablet, 1 on mobile)
  const visibleItems = 5;
  const itemsToShow = items.slice(
    currentIndex,
    currentIndex + visibleItems
  ).concat(items.slice(0, Math.max(0, currentIndex + visibleItems - items.length)));

  return (
    <div className="relative w-full py-8 px-4">
      {/* Carousel Container */}
      <div className="relative overflow-hidden bg-white rounded-lg">
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8 md:p-12">
          {itemsToShow.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-32 md:h-40 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => goToSlide((currentIndex + index) % items.length)}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-24 md:max-h-32 max-w-full object-contain px-4 filter hover:drop-shadow-lg transition-all duration-300"
                title={logo.alt}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showControls && items.length > visibleItems && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-primary text-white hover:bg-red-700 transition-all duration-300 rounded-r-lg shadow-lg hover:shadow-xl"
              aria-label="Previous logos"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-primary text-white hover:bg-red-700 transition-all duration-300 rounded-l-lg shadow-lg hover:shadow-xl"
              aria-label="Next logos"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {items.length > visibleItems && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(items.length / visibleItems) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * visibleItems)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleItems) === index
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      )}

      {/* Info Text */}
      <p className="text-center text-gray-600 text-sm mt-6">
        Trusted by leading global brands
      </p>
    </div>
  );
}
