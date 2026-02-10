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
    <div className="relative h-full w-full min-h-[300px] lg:min-h-[520px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative flex h-full w-full items-center justify-center"
        >
          {/* Main Image Container */}
          <div className="relative h-full w-full max-w-[860px] rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl transition-transform duration-500 hover:scale-[1.01] lg:rounded-3xl lg:p-3 xl:p-3.5">
            <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100/65 via-sky-50 to-violet-100/65 lg:rounded-2xl">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="h-full w-full object-contain p-4 sm:p-6 lg:p-8 xl:p-10"
              />

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent" />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-3 top-3 z-20 max-w-[84%] rounded-xl border border-white/80 bg-white/92 p-3 shadow-lg backdrop-blur-md lg:left-4 lg:top-4 lg:max-w-[70%] lg:rounded-2xl lg:p-3.5 xl:p-4"
              >
                <h3 className="mb-1.5 text-sm font-bold text-slate-900 lg:text-base xl:text-lg">
                  {currentItem.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 lg:text-sm xl:text-base">
                  {currentItem.description}
                </p>
              </motion.div>

              {/* Floating Stats Card */}
              {currentItem.stats && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-3 right-3 z-20 flex min-w-[140px] items-center gap-2.5 rounded-xl border border-white/80 bg-white/92 p-2.5 shadow-lg backdrop-blur-md lg:bottom-4 lg:right-4 lg:min-w-[160px] lg:gap-3 lg:rounded-2xl lg:p-3 xl:min-w-[180px] xl:p-3.5"
                >
                  <div
                    className={`${currentItem.stats.color} rounded-lg p-1.5 lg:rounded-xl lg:p-2`}
                  >
                    <div className="h-3 w-3 rounded-full bg-white/30 lg:h-3.5 lg:w-3.5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 lg:text-[11px]">
                      {currentItem.stats.label}
                    </p>
                    <p className="text-sm font-bold text-slate-900 lg:text-base">
                      {currentItem.stats.value}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Indicators + Progress (overlayed on image for visibility) */}
              <div className="absolute bottom-3 left-3 z-20 flex flex-col items-start gap-2 lg:bottom-4 lg:left-4">
                <div className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-slate-900/55 px-3.5 py-2 shadow-lg backdrop-blur-md lg:gap-3">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 w-3 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 lg:h-3.5 lg:w-3.5 ${
                        index === currentIndex
                          ? 'w-8 lg:w-9 border-white bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_0_2px_rgba(255,255,255,0.65)]'
                          : 'border-white/55 bg-white/45 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="h-1 w-[170px] overflow-hidden rounded-full border border-white/30 bg-slate-900/35 shadow-sm sm:w-[220px] lg:h-1.5 lg:w-[260px] xl:w-[300px]">
                  <motion.div
                    key={currentIndex}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: autoScrollInterval / 1000,
                      ease: 'linear',
                    }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
