'use client';

import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex">
      <motion.div
        animate={'visible'}
        initial={'hidden'}
        transition={{
          staggerChildren: 0.2,
        }}
        className="mx-auto flex max-w-[600px] flex-wrap gap-2"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-10 w-[240px] grow-1 rounded-lg border border-white/12 bg-neutral-950 max-md:translate-y-[var(--y)] md:translate-x-[var(--x)]"
            variants={{
              visible: {
                '--x': '0%',
                '--y': '0%',
              },
              hidden: {
                '--x': '-100%',
                '--y': '100%',
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
