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
    <div className="relative w-full sm:h-[380px] lg:h-[460px] xl:h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative flex w-full items-center justify-center sm:h-full"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-[860px] rounded-[1.35rem] border border-slate-100 bg-white p-2 shadow-xl transition-transform duration-500 lg:hover:scale-[1.01] sm:h-full sm:rounded-2xl sm:p-2.5 lg:rounded-3xl lg:p-3 xl:p-3.5">
            <div className="relative h-[248px] overflow-hidden rounded-[1rem] bg-gradient-to-br from-indigo-100/65 via-sky-50 to-violet-100/65 sm:h-full sm:rounded-xl lg:rounded-2xl">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="h-full w-full object-contain p-1 sm:h-auto sm:max-h-full sm:p-3 lg:p-4 xl:p-5"
              />

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent" />

              {/* Content Card (desktop/tablet) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-2.5 top-2.5 z-20 hidden max-w-[84%] rounded-xl border border-white/80 bg-white/94 p-3 shadow-lg backdrop-blur-md sm:block sm:left-3 sm:top-3 sm:p-2.5 lg:left-4 lg:top-4 lg:max-w-[70%] lg:rounded-2xl lg:p-3.5 xl:p-4"
              >
                <h3 className="carousel-overlay-title mb-1.5 font-bold text-slate-900">
                  {currentItem.title}
                </h3>
                <p className="text-[15px] leading-[1.45] text-slate-600 sm:text-[15.5px] sm:leading-relaxed lg:text-base">
                  {currentItem.description}
                </p>
              </motion.div>

              {/* Floating Stats Card */}
              {currentItem.stats && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-3 right-3 z-20 hidden min-w-[124px] items-center gap-2 rounded-xl border border-white/80 bg-white/94 p-2 shadow-lg backdrop-blur-md sm:flex lg:bottom-4 lg:right-4 lg:min-w-[160px] lg:gap-3 lg:rounded-2xl lg:p-3 xl:min-w-[180px] xl:p-3.5"
                >
                  <div
                    className={`${currentItem.stats.color} rounded-lg p-1.5 lg:rounded-xl lg:p-2`}
                  >
                    <div className="h-3 w-3 rounded-full bg-white/30 lg:h-3.5 lg:w-3.5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {currentItem.stats.label}
                    </p>
                    <p className="text-[15px] font-bold leading-tight text-slate-900 lg:text-[18px]">
                      {currentItem.stats.value}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Indicators + Progress (desktop/tablet) */}
              <div className="absolute bottom-3 left-3 z-20 hidden flex-col items-start gap-2 sm:flex lg:bottom-4 lg:left-4">
                <div className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-slate-900/55 px-3 py-1.5 shadow-lg backdrop-blur-md sm:px-3.5 sm:py-2 lg:gap-3">
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

                <div className="h-1 w-full overflow-hidden rounded-full border border-white/30 bg-slate-900/35 shadow-sm sm:w-[200px] lg:h-1.5 lg:w-[260px] xl:w-[300px]">
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

            {/* Mobile info block (keeps image unobstructed) */}
            <div className="mt-2.5 space-y-2 sm:hidden">
              <div className="rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-sm backdrop-blur-sm">
                <h3 className="text-[17px] font-bold leading-tight text-slate-900">
                  {currentItem.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-[1.4] text-slate-600">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2">
                {currentItem.stats ? (
                  <div className="flex min-w-[156px] items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-2.5 py-2 shadow-sm">
                    <div className={`${currentItem.stats.color} rounded-lg p-1.5`}>
                      <div className="h-3 w-3 rounded-full bg-white/30" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase leading-none tracking-wide text-slate-500">
                        {currentItem.stats.label}
                      </p>
                      <p className="mt-0.5 text-[15px] font-bold leading-none text-slate-900">
                        {currentItem.stats.value}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div />
                )}

                <div className="flex items-center justify-center gap-1.5 rounded-full border border-slate-300/70 bg-slate-800/70 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                        index === currentIndex
                          ? 'w-7 border-white bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_0_2px_rgba(255,255,255,0.65)]'
                          : 'border-white/55 bg-white/45'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="h-1 w-full overflow-hidden rounded-full border border-slate-300/60 bg-slate-700/25 shadow-sm">
                <motion.div
                  key={currentIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: autoScrollInterval / 1000,
                    ease: 'linear',
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
