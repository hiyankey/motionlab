'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <motion.ol
        initial={{ '--x': '0px' }}
        animate={{ '--x': '100px' }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
      >
        <li className="translate-x-[--x]">List 1</li>
        <li className="translate-x-[--x]">List 2</li>
      </motion.ol>
    </div>
  );
}
