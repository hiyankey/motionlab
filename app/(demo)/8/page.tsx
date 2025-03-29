'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';

export default function Page() {
  const x = useMotionValue(0);
  const borderRadius = useTransform(x, [-100, 0, 100], ['50%', '0%', '50%']);

  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        style={{ x, borderRadius, scale }}
        className="flex h-32 w-32 items-center justify-center rounded-md bg-white text-white"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      />
    </div>
  );
}
