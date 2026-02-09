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
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative w-full flex justify-center"
        >
          {/* Main Image Container */}
          <div className="relative rounded-2xl lg:rounded-3xl bg-white shadow-xl border border-slate-100 p-2.5 lg:p-3 xl:p-3.5 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-auto object-cover min-h-[150px] lg:min-h-[180px] xl:min-h-[210px]"
              />

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Indicators + Progress (overlayed on image for visibility) */}
              <div className="absolute inset-x-4 bottom-6 z-10 flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-2 lg:gap-3 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 border border-slate-200 shadow-sm">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-blue-600 w-7 lg:w-8'
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="w-full max-w-[320px] h-1 lg:h-1.5 bg-white/85 rounded-full overflow-hidden border border-white/60 shadow-sm">
                  <motion.div
                    key={currentIndex}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: autoScrollInterval / 1000, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            {currentItem.stats && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-3 -right-3 lg:-bottom-3.5 lg:-right-3.5 xl:-bottom-4 xl:-right-4 bg-white p-2.5 lg:p-3 xl:p-3.5 rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 lg:gap-3 min-w-[140px] lg:min-w-[160px] xl:min-w-[180px]"
              >
                <div
                  className={`${currentItem.stats.color} p-1.5 lg:p-2 rounded-lg lg:rounded-xl`}
                >
                  <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 bg-white/30 rounded-full" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-[11px] text-slate-500 font-semibold uppercase tracking-wide mb-0.5">
                    {currentItem.stats.label}
                  </p>
                  <p className="text-sm lg:text-base font-bold text-slate-900">
                    {currentItem.stats.value}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Indicators + Progress moved into image overlay */}
          </div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 xl:-top-5 xl:-left-5 bg-white p-3 lg:p-3.5 xl:p-4 rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <h3 className="text-sm lg:text-base xl:text-lg font-bold text-slate-900 mb-2">
              {currentItem.title}
            </h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
              {currentItem.description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
