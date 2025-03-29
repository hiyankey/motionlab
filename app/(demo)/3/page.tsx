'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <motion.button
        className=" h-[36px] rounded-lg bg-black px-3"
        initial={{
          backgroundColor: '#f00',
        }}
        animate={{
          backgroundColor: '#00f',
          transform: 'scale(2) translateY(20px)',
        }}
      >
        Get started
      </motion.button>
    </div>
  );
}
