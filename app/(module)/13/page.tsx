'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            className="aspect-square w-[240px] rounded-lg bg-white"
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: 20 },
            }}
            initial="closed"
            animate="open"
            exit="closed"
          />
        )}
      </AnimatePresence>
      <button
        type="button"
        className="flex h-[36px] w-fit place-items-center rounded-full bg-black px-2"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Toggle visibility
      </button>
    </div>
  );
}
