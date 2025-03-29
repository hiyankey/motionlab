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
          scale: 2,
          y: 20,
        }}
        transition={{
          delay: 2,
          // ease: 'easeInOut',
          duration: 2,
          repeat: 4,
          repeatType: 'reverse',
          repeatDelay: 0.5,
          type: 'spring',
          damping: 10,
          mass: 1,
          stiffness: 100,
        }}
      >
        Get started
      </motion.button>
    </div>
  );
}
