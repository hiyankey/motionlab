'use client';
import { motion, useMotionValue, useTransform } from 'motion/react';

export default function Page() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ['#f00', '#0f0', '#00f']
  );

  return (
    <div className="grid h-screen place-items-center">
      <motion.button
        className="rounded-full bg-blue-600 px-3 py-2"
        style={{ x, backgroundColor }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        transition={{ ease: 'easeInOut' }}
      >
        Click
      </motion.button>
    </div>
  );
}
