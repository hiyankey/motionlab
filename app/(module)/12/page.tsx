'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="grid h-screen place-items-center">
      <button
        type="button"
        className="rounded-full bg-black px-3 py-2"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Toggle visibility
      </button>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            className="aspect-square w-[240px] rounded-lg bg-white"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
