'use client';

import { motion, useScroll, useTransform } from 'motion/react';

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div className="flex flex-col">
      <motion.div
        className="sticky top-0 left-0 h-1 origin-top-left bg-blue-500"
        style={{ scaleX }}
      />
      <div className="h-[200vh] w-full" />
    </div>
  );
}
