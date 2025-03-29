'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        className="h-[36px] rounded-full bg-black px-3"
      >
        Toggle modal
      </button>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            variants={{
              open: { y: 0, opacity: 1, scale: 1 },
              closed: { y: 20, opacity: 0, scale: 0.9 },
            }}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            className="relative mt-2 aspect-square w-[160px] rounded-2xl bg-white"
          >
            <motion.div
              className="absolute top-2 right-2 size-6 rounded-full bg-black"
              variants={{
                open: { opacity: 1, scale: 1 },
                closed: { opacity: 0, scale: 0.3 },
              }}
              onClick={() => setIsVisible(false)}
            >
              {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <motion.svg
                viewBox="0 0 512 512"
                className="relative inset-1.5 size-3 fill-white"
              >
                <path d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z" />
              </motion.svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
