'use client';
import { motion, useMotionValue, useTransform } from 'motion/react';
import type { ChangeEvent } from 'react';

export default function Page() {
  const sliderVal = useMotionValue(1);
  const opacity = useTransform(sliderVal, [1, 5], [0, 1]);
  const onRangeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    sliderVal.set(Number.parseFloat(ev.target.value));
  };
  return (
    <div className="grid h-screen place-items-center">
      <motion.button
        className="rounded-full bg-blue-600 px-3 py-2"
        style={{ opacity }}
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
