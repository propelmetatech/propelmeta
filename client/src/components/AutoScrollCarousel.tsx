import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  stats?: {
    label: string;
    value: string;
    color: string;
  };
}

interface AutoScrollCarouselProps {
  items: CarouselItem[];
  autoScrollInterval?: number;
}

export function AutoScrollCarousel({
  items,
  autoScrollInterval = 4000,
}: AutoScrollCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [items.length, autoScrollInterval]);

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-2xl lg:rounded-3xl bg-white shadow-xl border border-slate-100 p-4 lg:p-6 xl:p-8 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-auto object-cover min-h-[280px] lg:min-h-[320px] xl:min-h-[360px]"
              />

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            {currentItem.stats && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 xl:-bottom-10 xl:-right-10 bg-white p-4 lg:p-5 xl:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 lg:gap-4 min-w-[200px] lg:min-w-[240px] xl:min-w-[280px]"
              >
                <div
                  className={`${currentItem.stats.color} p-2.5 lg:p-3 xl:p-3.5 rounded-lg lg:rounded-xl`}
                >
                  <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-white/30 rounded-full" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">
                    {currentItem.stats.label}
                  </p>
                  <p className="text-lg lg:text-xl xl:text-2xl font-bold text-slate-900">
                    {currentItem.stats.value}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -top-8 -left-8 lg:-top-10 lg:-left-10 xl:-top-12 xl:-left-12 bg-white p-6 lg:p-7 xl:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-3 lg:mb-4">
              {currentItem.title}
            </h3>
            <p className="text-sm lg:text-base xl:text-lg text-slate-600 leading-relaxed">
              {currentItem.description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute -bottom-16 lg:-bottom-18 xl:-bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 w-8 lg:w-10'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-scroll progress bar */}
      <div className="absolute -bottom-20 lg:-bottom-22 xl:-bottom-24 left-0 right-0 h-1 lg:h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: autoScrollInterval / 1000, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}
