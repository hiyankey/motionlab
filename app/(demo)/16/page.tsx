'use client';

import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <div className="h-screen w-full" />
      <motion.div
        className="mx-auto flex h-auto w-[600px] flex-wrap gap-2 rounded-lg border border-white/5 bg-white/3 p-2"
        whileInView={'visible'}
        animate={'hidden'}
        initial={'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {
            transition: {
              staggerChildren: 0.2,
              staggerDirection: -1,
            },
          },
        }}
        viewport={{
          amount: 1,
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-20 w-[160px] grow-1 rounded-md bg-white/5"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },
              hidden: {
                opacity: 0,
                x: -100,
              },
            }}
          />
        ))}
      </motion.div>
      <div className="h-screen w-full" />
    </div>
  );
}
