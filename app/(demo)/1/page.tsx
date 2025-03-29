'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <motion.button className=" h-[36px] rounded-lg bg-black px-3">
        Get started
      </motion.button>
    </div>
  );
}
