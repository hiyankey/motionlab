'use client';
import { motion, useMotionValue } from 'motion/react';
import type { ChangeEvent } from 'react';

export default function Page() {
  const scale = useMotionValue(2);
  const onRangeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    scale.set(Number.parseFloat(ev.target.value));
  };
  return (
    <div className="grid h-screen place-items-center">
      <motion.button
        className="rounded-full bg-blue-600 px-3 py-2"
        style={{ scale }}
        transition={{ ease: 'easeInOut' }}
      >
        Click
      </motion.button>

      <input
        type="range"
        min={0.5}
        max={5}
        step={0.01}
        defaultValue={1}
        onChange={(ev) => onRangeChange(ev)}
      />
    </div>
  );
}
