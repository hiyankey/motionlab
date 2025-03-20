'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex h-screen place-items-center justify-center bg-gray-100">
      <motion.button
        className="rounded-lg bg-black px-3 py-1.5 text-white"
        initial={{
          backgroundColor: '#f00',
        }}
        animate={{
          backgroundColor: '#00f',
          scale: 2,
          y: '50%',
          rotate: 18000,
        }}
        transition={{
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0.5,
          repeatType: 'reverse',
          type: 'spring',
          mass: 5,
          damping: 200,
          stiffness: 20,
        }}
      >
        Get started
      </motion.button>
    </div>
  );
}
