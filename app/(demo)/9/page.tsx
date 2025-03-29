'use client';

import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <motion.ol
        initial={{ '--x': '0px' }}
        animate={{ '--x': '100px' }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        className="flex flex-col gap-3 text-center"
      >
        <li className="translate-x-[var(--x)] rounded-2xl bg-white p-5">CSS</li>
        <li className="translate-x-[var(--x)] rounded-2xl bg-white p-5">is</li>
        <li className="translate-x-[var(--x)] rounded-2xl bg-white p-5">
          the BEST
        </li>
      </motion.ol>
    </div>
  );
}
