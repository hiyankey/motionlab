'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <motion.div
        className=" size-10 h-[36px] rounded-lg bg-black"
        initial={{
          backgroundColor: '#00f',
        }}
        animate={{
          scale: [1, 1, 2, 2, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{
          delay: 2,
          ease: 'easeInOut',
          duration: 2,
          repeat: 4,
          repeatType: 'reverse',
          repeatDelay: 0.5,

          times: [0, 0.2, 0.4, 0.6, 1],
        }}
      />
    </div>
  );
}
