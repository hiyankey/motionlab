'use client';

import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <div className="flex aspect-[2/4] w-[160px] flex-col overflow-hidden rounded-xl bg-stone-600">
        <div className="h-full [mask-image:linear-gradient(#000,#000_calc(100%-80px),transparent)]">
          <motion.p
            className="origin-top-left break-all text-7xl "
            animate={{
              scaleX: [1.2, 1.2, 1.6, 1.6, 1.6],
              scaleY: [1, 1, 1, 1.6, 1.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
              duration: 5,
              times: [0, 0.3, 0.5, 0.7, 1],
            }}
          >
            Responsive
          </motion.p>
        </div>

        <p className="mt-auto p-2">Make your animations work on all devices</p>
      </div>
    </div>
  );
}
