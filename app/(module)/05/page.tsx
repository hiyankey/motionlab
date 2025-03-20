'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex h-screen place-items-center justify-center bg-gray-100">
      <motion.div
        className="size-10 rounded-lg bg-black text-white"
        initial={{
          backgroundColor: '#f00',
        }}
        animate={{
          backgroundColor: '#00f',
          scale: [1, 2, 2, 1],
          rotate: [0, 180, 180, 0],
          borderRadius: ['0%', '50%', '50%', '0%'],
        }}
        transition={{
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0.5,
          easings: 'easeInOut',
          repeatType: 'reverse',
          duration: 4,
          times: [0, 0.2, 0.8, 1],
        }}
      />
    </div>
  );
}
