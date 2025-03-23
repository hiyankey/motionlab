'use client';
import { motion } from 'motion/react';
export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex aspect-[2/4] w-[160px] flex-col overflow-hidden rounded-lg bg-stone-700">
        <div className="h-full ">
          <motion.p
            className="absolute inset-1 origin-top-left break-all text-4xl text-white"
            animate={{
              scaleX: [1, 1.5, 1.5, 2, 2, 2],
              scaleY: [1, 1, 1, 1.5, 1.5, 2],
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              times: [0, 0.1, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            Lorem ipsum dolor sit amet
          </motion.p>
        </div>
      </div>
    </div>
  );
}
