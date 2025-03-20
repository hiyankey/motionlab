'use client';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex h-screen place-items-center justify-center bg-gray-100">
      <motion.button className="rounded-lg bg-black px-3 py-1.5 text-white">
        Get started
      </motion.button>
      <MotionButton />
    </div>
  );
}

const Button = () => {
  return <button type="button">...</button>;
};

const MotionButton = motion.create(Button);
